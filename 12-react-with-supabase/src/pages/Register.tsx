import React, { useId, useState } from "react";
import S from "./Register.module.css";
import supabase from "@/supabase/supabase";
import Swal from "sweetalert2";

function Register() {
  const emailId = useId();
  const pwId = useId();
  const pwConfirmId = useId();
  const avatarId = useId();

  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pass !== passwordConfirm) {
      setErrorMsg("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    const {
      data: { user },
      error: signUpError,
    } = await supabase.auth.signUp({
      email: id,
      password: pass,
      // options:{
      //   emailRedirectTo:'http://localhost:3000/callback'
      // }
    });

    if (avatarFile) {
      const fileExt = avatarFile.name.split(".").pop();
      const fileName = `${user?.id}.${fileExt}`;
      const filePath = fileName;

      if (!signUpError) {
        const { data, error } = await supabase.storage
          .from("avatars")
          .upload(filePath, avatarFile, {
            upsert: true,
          });
      }
      Swal.fire({
        title: "회원가입 완료!",
        text: "로그인 페이지로 이동합니다",
        icon: "success",
      }).then(() => {
        history.pushState(null, "", "/Login");
        location.reload();
      });
    } else console.log(signUpError);
  };

  return (
    <div className={S.container}>
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <hr />
        <div>
          <label htmlFor={emailId}>이메일</label>
          <input
            id={emailId}
            type="email"
            required
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={pwId}>비밀번호</label>
          <input
            id={pwId}
            type="password"
            required
            onChange={(e) => {
              console.log(pass);
              setPass(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor={pwConfirmId}>비밀번호 확인</label>
          <input
            id={pwConfirmId}
            type="password"
            required
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={avatarId}>프로필 이미지</label>
          <input
            type="file"
            accept="image/*"
            id={avatarId}
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              setAvatarFile(file);

              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setAvatarPreview(reader.result as string);
                };

                reader.readAsDataURL(file);
              } else {
                setAvatarPreview(null);
              }
            }}
          />
          {avatarPreview && (
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
              <img
                src={avatarPreview}
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          )}
        </div>

        <button type="submit">가입하기</button>
        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </div>
  );
}
export default Register;
