import supabase from "@/supabase/supabase";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: User | null;
  isAuth:boolean;
  logout: () => void;
}

interface User {
  id: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }:{ children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // 로컬스토리지에 있는 auth의 정보를 가져옴

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser({ id: user.id, email: user.email! });
      }
    });

    // 구독 이벤트 처리
    const {data: listener} = supabase.auth.onAuthStateChange((event, session)=>{
      if(event === 'SIGNED_IN' && session?.user){ // 로그인 정보가 바뀌었을 때
        setUser({id:session.user.id, email:session.user.email!})
      }else if (event === "SIGNED_OUT"){
        setUser(null);
      }
    })

    // 클린업이 일어날 때 이벤트 구독을 취소
    return () => listener.subscription.unsubscribe();

  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  }

  return <AuthContext.Provider value={{user, isAuth:!!user, logout}}>{children}</AuthContext.Provider>;
}

export function useAuth(){
  const ctx = useContext(AuthContext);
  if(!ctx) throw new Error('<AuthProvider> 안에서만 사용할 수 있습니다.');
  return ctx
}

export default AuthProvider;
