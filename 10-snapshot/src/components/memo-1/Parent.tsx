import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() =>{
    console.log('clicked!')
  }, [])

  const fruits = useMemo(() => ['사과', '배', '바나나', '딸기'], [])

  return (
    <div>
      <h1>Parent Count : {count}</h1>
      <button type="button" onClick={()=> setCount(count+1)}>버튼</button>
      <Child label="나는 자식이다." onClick={handleClick} items={fruits}/>
    </div>
  );
}

export default Parent;
