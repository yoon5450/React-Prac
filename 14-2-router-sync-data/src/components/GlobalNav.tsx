import { routes } from "@/router/routes";
import { NavLink } from "react-router";
import extractNavItems from '@/utils/extractNavItems';

function GlobalNav() {
  // const navList = [
  //   { to: "/", label: "Home" },
  //   { to: "about", label: "About" },
  //   { to: "auth/login", label: "Login" },
  //   { to: "auth/register", label: "Register" },
  //   { to: "concerts", label: "Concerts" },
  //   { to: "concerts/trending", label: "Trending" },
  // ];

  const S = {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
  };

  const navList = extractNavItems(routes.routes);

  // NavLink는 헤더 등의 공통 컴포넌트에서 사용할 때 NavLink로
  // 클릭으로 넘어가는 링크의 경우에는 Link를 이용
  return (
    <nav>
      <ul style={S}>
        {navList.map(({ path, label }) => (
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
              to={path}
              key={path}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default GlobalNav;
