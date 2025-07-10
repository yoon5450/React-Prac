import React, { useState } from "react";
import EventHandlerProp from "./EventHandlerProp";
import EventPropagation from "./EventPropagation";
import EventWithSideEffect from "./EventWithSideEffect";

function View() {
  return <div></div>;
}

export default View;
  let message = ""

function RespondingToEvents() {
  const [text, setText] = useState('')

  const handler = () =>{
    console.log('hi handler')
  }

  const updateMessage = (add:string):void => { 
    message += add;
    console.log(message);
   }


  return (
    <div className="ViewRespondingToEvent">
      <h1>이벤트 응답</h1>
      <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
      <hr />

      <form action="/?submitted"
      onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const userNameInput = target.children[0] as HTMLInputElement
        setText(userNameInput?.value)
      }}>
        
        <input
          name="사용자 이름"
          type="text"
          aria-label="사용자 이름"
          placeholder="윤대웅"
          // style={{ marginRight: "10px" }}
        />
        {' '}
        <button type="submit"> 보내기 </button>

      </form>
      <div>
        <output>{text}</output>
      </div>

      <EventHandlerProp onUpdateMessage={handler}/>
      <EventPropagation />
      <EventWithSideEffect />
    </div>
  );
}

// 컴파운드 컴포넌트
View.RespondingToEvents = RespondingToEvents;
