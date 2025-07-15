import React, { useContext, useId, useState } from "react";
import S from "./Login.module.css";
import supabase from "@/supabase/supabase";
import Swal from "sweetalert2";
import { RouterContext } from "@/router/RouterProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState<string|null>(null);
  const {setHistoryRoute} = useContext(RouterContext)!;

  const userId = useId();
  const passId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // 로그인 처리
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pass,
    });

    if (!error) {
      console.log(data);
      Swal.fire({
        title:'로그인에 성공했습니다!',
        text:'메인 페이지로 이동합니다.',
        icon:'success',
      }).then(()=>{
        setHistoryRoute('/')
      })
    }
    else {
      history.pushState(null, '', '/')
      setError(error.message);
    }
  }

  return (
    <div className={S.container}>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <h2>로그인</h2>
          <hr />
          <div>
            <label htmlFor={userId}>이메일:</label>
            <input
              type="text"
              name="email"
              id={userId}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              aria-required
            />
          </div>
          <div>
            <label htmlFor={passId}>비밀번호:</label>
            <input
              type="password"
              name="password"
              id={passId}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              required
              aria-required
            />
          </div>
          <button type="submit">로그인</button>
          <hr />
          <a href="">아직도 2.9cm 회원이 아니세요?</a>
          {
            error && <p style={{paddingTop:'1rem', color:'red'}}>{error}</p>
          }
        </form>
      </div>
    </div>
  );
}
export default Login;
