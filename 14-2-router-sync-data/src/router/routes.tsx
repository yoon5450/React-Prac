import { loader as trendingLoader } from "@/pages/Concerts/Trending";
import NotFound from "@/pages/NotFound";
import { loader as UserLoader } from "@/pages/User/UserDetail";
import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router";

/*

element : JSX 엘리먼트를 직접 전달하는 방식 v6+
이미 렌더링된 React Element를 라우터에게 전달하는 방식
매 렌더링 시 JSX가 즉시 생성되므로, 코드 스플리팅 (lazy 로딩) 매우 불편함

Component : 컴포넌트 함수 본문 자체를 전달하는 방식 v7+
라우터가 내부적으로 React.createElement를 호출해서 인스턴스를 생성함.
라우터가 필요할 때만 컴포넌트를 생성하므로 lazy 로딩과 Suspense 처리를 더 자연스럽게 할 수 있음.

*/

// 코드 스플리팅 ( 페이지가 보일 때만 추가로 로드 )
const Root = lazy(() => import("@/pages/Root"));
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));

const AuthLayout = lazy(() => import("@/pages/Auth/AuthLayout"));
const Login = lazy(() => import("@/pages/Auth/Login"));
const Register = lazy(() => import("@/pages/Auth/Register"));
const RequireAuth = lazy(() => import("@/pages/Auth/RequireAuth"));

const ConcertsHome = lazy(() => import("@/pages/Concerts/ConcertsHome"));
const City = lazy(() => import("@/pages/Concerts/City"));
const Trending = lazy(() => import("@/pages/Concerts/Trending"));

const UserDetail = lazy(()=> import("@/pages/User/UserDetail"))
const NewUser = lazy(() => import("@/pages/User/NewUser"))

// 브라우저 라우터 컴포넌트를 만듦
export const routes = createBrowserRouter([
  {
    path: "/",
    // 7버전에서는 Component로 변경
    // <>로 감싼 React Node가 들어가는 것이 아닌 해당 컴포넌트 자체를 넣어주면 알아서 생성.
    Component: Root,
    children: [
      // 커스텀은 handle을 이용해 만든다.
      {
        index: true,
        element: <Home />,
        handle: { label: "Home", showInNav: true },
      },
      {
        path: "about",
        element: <About />,
        handle: { label: "About", showInNav: true },
      },

      // auth
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          {
            path: "login",
            Component: Login,
            handle: { label: "Login", showInNav: true },
          },
          {
            path: "register",
            Component: Register,
            handle: { label: "Register", showInNav: true },
          },
        ],
      },

      // concert
      {
        path: "concerts",
        // Protect Routing
        Component: () => (
          <RequireAuth>
            <Outlet></Outlet>
          </RequireAuth>
        ),
        children: [
          {
            index: true,
            Component: ConcertsHome,
            handle: { label: "Concert", showInNav: true },
          },
          { path: ":city", Component: City },
          {
            path: "trending",
            Component: Trending,
            // Fallback 시간 동안 (데이터를 불러오는 동안) 보여주는 컨텐츠
            HydrateFallback: () => <div>데이터 로딩 중...</div>,
            handle: { label: "Trending", showInNav: true },
            // 페이지가 로드되기 전에 데이터를 가져옴
            loader: trendingLoader,
            // loader: async () => {
            //   const res = await fetch('https://jsonplaceholder.typicode.com/users')
            //   return res.json();
            // }
          },
        ],
      },

      // user
      {
        path: "users",
        handle: { label: "users", showInNav: false },
        children: [
          {
            path: ":user_id",
            Component: UserDetail,
            loader: UserLoader,
            HydrateFallback: () => <div>데이터 로딩 중...</div>,
          },
        ],
      },
      {
        path:'users/new',
        Component:NewUser,
        action: async ({request}) => {
          const formData = await request.formData();
          const name = formData.get('name') as string
          const email = formData.get('email') as string

          console.log(name, email);
        }
      }
    ],
  },
  { path: "*", element: <NotFound /> },
]);
