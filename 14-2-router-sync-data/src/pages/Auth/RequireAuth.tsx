import type React from "react";
import useAuth from "@/hook/useAuth";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuth } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      console.log('흠.');
      // from location 정보를 가지고 있기 때문에 로그인 성공 후 location.state.from으로 돌려 준다.
      // replace : 뒤로가기 방지
      navigate("/auth/login", { state: { from: location }, replace:true, preventScrollReset:true});
    }
  });

  return <>{children}</>;
}
export default RequireAuth;
