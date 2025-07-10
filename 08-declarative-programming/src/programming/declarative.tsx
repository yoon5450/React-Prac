import React, { useState } from "react";

type Status = 'success' | 'typing' | 'submitting'

// 화면에 여러 상태를 선언하고 상태에 따라서 화면에 렌더링하는 것
function Form() {
  const [answer, setAnsser] = useState('')
  const [status, setStatus] = useState<Status>('typing');
  const [error, setError] = useState<Error | null>(null);

  if(status === 'success'){
    return <h1>정답입니다~~!!</h1>
  }

  // 상태가 (글 작성중 | 성공 | 제출중) 으로 나뉨

  const handleTextareaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => { 
    setAnsser(e.target.value)
   }


   const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    setStatus('submitting')
    try{
      await submitForm(answer) 
      setStatus('success')
    }catch(err){
      setStatus('typing')
      if(err instanceof Error){
        setError(err)
      }
    }
   }


  return (
    <form id="form">
      <h2>프로그래머스 퀴즈!</h2>
      <p>프로그래머스에서 가장 잘생긴 사람은?</p>
      <textarea id="textarea"
      onChange={handleTextareaChange}></textarea>
      <br />
      <button 
      type="submit" 
      id="button" 
      onClick={handleSubmit}
      disabled={status === "submitting" || answer.length === 0}>
        Submit
      </button>
      {error !== null && <p style={{color:'red'}}>{error.message}</p>}
      {status === "submitting" && <p>loading...</p>}
    </form>
  );
}

export default Form;

const submitForm = (answer: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "심선범") {
        resolve("👍");
      } else {
        reject(new Error("땡! 너는 이미 정답을 알고있다."));
      }
    }, 1500);
  });
};
