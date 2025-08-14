import { Outlet } from "react-router";

function AuthLayout() {

  const S = {
    border:'1px solid black',
    padding:'2rem'
  }

  return (
    <div style={S}>
      <div>AuthLayout</div>
      <hr />
      {/* Outlet 위치에 추가 페이지로 들어옴 */}
      <Outlet />
    </div>
  );
}
export default AuthLayout;
