import { createContext } from "react";

interface UserContextType {
  userName: string;
  setUsername:(name:string)=>void;
}

export const UserContext = createContext<UserContextType | null>(null)!;