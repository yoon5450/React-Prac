import { useRef } from "react";
import Child from "./Child"

function Parent() {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFoucus = () =>{
    // 명령형 프로그래밍
    const input = document.querySelector('input') as HTMLInputElement
    console.log(input);

    //선언형 프로그래밍
    if(inputRef.current) inputRef.current.focus();
  }

  return (
    <>
    <Child ref={inputRef} placeholder={`아이디를 입력하세요`}></Child>
    <button onClick={handleFoucus} type="button">인풋에 포커스</button>
    </>
  )
}
export default Parent