import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/NotFound";
import ConcertsHome from "./pages/Concerts/ConcertsHome";
import Trending from "./pages/Concerts/Trending";
import AuthLayout from "./pages/Auth/AuthLayout";
import Root from "./pages/Root";
import City from "./pages/Concerts/City";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* 그룹화 */}
            {/* element를 지정해 공통 레이아웃 */}
            <Route path="auth" element={<AuthLayout />}>
              {/* 그룹화된 상태에서 root의 페이지는 index를 이용하거나 element를 이용 */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route path="concerts"
            >
              <Route index element={<ConcertsHome />} />
              <Route path="trending" element={<Trending />} />
              <Route path=":city" element={<City />} />
            </Route>

            {/* 404 페이지 설정 */}
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
