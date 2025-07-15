import { RouterContext } from "@/router/RouterProvider";
import type React from "react";
import { useContext } from "react";
import S from './layout/Header.module.css';

interface Props{
  to:string;
  children?: React.ReactNode;
  className?:string
  activeClassName?:string;
}


function NavLink({to, children, className = '', activeClassName = S.active}:Props) {

  const {currentPath, setHistoryRoute}= useContext(RouterContext)!;

  const handleLink = (e:React.MouseEvent<HTMLAnchorElement>) =>{
    e.preventDefault();

    setHistoryRoute(to);
    history.pushState(null, '', to)
  }

  return (
    <a className={(currentPath === to ? activeClassName : '') + ` ${className}`} href={to} onClick={handleLink}>{children}</a>
  )
}
export default NavLink