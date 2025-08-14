import { useId } from "react";
import { Form } from "react-router";

function NewUser() {
  const nameId = useId();
  const emailId = useId();

  return (
    <div>
      <h2>새로운 유저 추가</h2>
      {/* 리액트 라우터에서는 Form을 이용 */}
      <Form method="post">
        <div>
          <label htmlFor={nameId}></label>
          <input type="text" id={nameId} name="name" placeholder="이름" required />
        </div>

        <div>
          <label htmlFor={emailId}></label>
          <input type="text" id={emailId} name="email" placeholder="이메일" required />
        </div>

        <button type="submit">등록</button>
      </Form>
    </div>
  );
}
export default NewUser;
