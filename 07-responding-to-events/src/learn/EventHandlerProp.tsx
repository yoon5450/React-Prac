import React from 'react'
interface Props {
  onUpdateMessage: (add:string) => void;
}


function EventHandlerProp({onUpdateMessage}:Props) {
  const handleClick = () =>{
    console.log('clicked')
  }

  const handleMouseEnter = () => { 
    onUpdateMessage('hi');
  }
  const handleMouseLeave = () => { }

  return (
    <details>
      <summary onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <b>이벤트 핸들러 추가하기</b>
      </summary>
      <p>이벤트 핸들러 추가를 위해서는 먼저 함수를 정의하고
        <br />
        이를 적절한 JSX 요소에 prop으로 전달해야 합니다.
      </p>
    </details>
  )
}

export default EventHandlerProp