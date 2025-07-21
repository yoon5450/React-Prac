import { useId, useRef, useState } from "react";
import S from "./style.module.css";

function Remember() {
  const refInputId = useId();
  const stateId = useId();

  // useRef() 훅 : 메모이제이션, 외부에 데이터 기억 저장/읽기
  // 현재(current) 기억된 값이 변경되더라도 기억은 하지만 리-렌더 요청은 안함.
  const messageRef = useRef("메세지를 기억합니다.");
  const reRender = useState(0)[1];

  // 함수 내 데이터 기억하는 방법
  // useState() 훅 함수 => 메모이제이션, 외부에 데이터 기억 저장/읽기
  //일반적으로 리액트에게 컴포넌트를 리렌더하도록 요청
  const [message, setMessage] = useState("");

  const handleRefChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    // ref 객체의 현재(current) 값 변경 방식
    // messageRef = {current : value}
    // 현재 값 읽기 : messageRef.current
    // 현재 값 쓰기 : messageRef.current = value;

    messageRef.current = value;
    console.log("ref 참조 객체의 현재 값이 변경됩니다.");
  };

  const handleClick = () => {
    console.log(messageRef);
  };

  const handleStateChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setMessage(value);
  };

  const handleReRender = () => {
    reRender((r) => --r);
  };

  return (
    <main className={S.container}>
      <h1>다시 렌더링 하지 않고 기억하기</h1>

      <div className={S.description}>
        <p>다시 렌더링 되더라도 사용자 메세지를 기억해야 합니다.</p>
        <p>하지만 사용자가 입력할 때마다 다시 렌더링되지 않아야 합니다.</p>
        <p>어떻게 해야 리-렌더링 요청 없이 메세지를 기억할 수 있을까?</p>
      </div>

      <div className={S.control}>
        <label htmlFor={refInputId} className="a11y-hidden">
          메세지 Ref
        </label>
        <input type="text" name="" id={refInputId} onChange={handleRefChange} />
      </div>

      <div className={S.control}>
        <label htmlFor={stateId} className="a11y-hidden">
          메세지 Ref
        </label>
        <input type="text" name="" id={stateId} onChange={handleStateChange} />
      </div>

      <div className={S.group}>
        <button type="button" onClick={handleClick}>
          메세지 확인
        </button>
        <button type="button" onClick={handleReRender}>
          다시 렌더링
        </button>
      </div>

      <div className={S.result}>
        <h3>Ref 메세지 값 : </h3>
        <p>{messageRef.current}</p>
        <h3>State 메세지 값 : </h3>
        <p>{message}</p>
      </div>
    </main>
  );
}

export default Remember;
