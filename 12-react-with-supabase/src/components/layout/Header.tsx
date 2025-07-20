import { routes } from "@/router/router";
import S from "./Header.module.css";
import NavLink from "../NavLink";
import { useAuth } from "@/auth/AuthProvider";
import Swal from "sweetalert2";
import { getAvartarUrl } from "../api/getAvatarUrl";
import { useEffect, useState } from "react";

function Header() {
  const { user, isAuth, logout } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState<string | null>();
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);

  const visibleRoutes = routes.filter(({ title }) => {
    if (isAuth) return title !== "회원가입" && title !== "로그인" && title !== '상품상세';
    else return title !== "회원가입";
  });

  useEffect(() => {
    if (user) {
      getAvartarUrl(user.id).then((url) => setAvatarUrl(url));
      setIsAvatarLoaded(true);
    }
  }, [user]);

  return (
    <header className={S.header}>
      <h1>2.9cm</h1>
      <nav>
        <h2 className="a11y-hidden">메인 메뉴</h2>
        <ul>
          {visibleRoutes.map(({ title, path }) => (
            <li key={path}>
              <NavLink to={path} className="aaaa">
                {title}
              </NavLink>
            </li>
          ))}
          {isAuth && (
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();

                  Swal.fire({
                    title: "정말 로그아웃 하시겠습니까?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "로그아웃",
                    cancelButtonText: "돌아가기",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      logout();
                    }
                  });
                }}
              >
                로그아웃
              </a>
            </li>
          )}
          {(
            isAvatarLoaded ? 
            <img
              src={avatarUrl ?? '/vite.svg'}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            ></img> : (<div>아바타 로딩 중</div>)
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
