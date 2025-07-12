import React, { useCallback, useState } from "react";


// 렌더링 할 때마다 재연산함 ( 낭비 )
function slow() {
  console.log("작업 중...");

  let sum = 0;
  for (let i = 0; i < 10000000; i++) {
    sum += i;
  }

  return sum;
}

function Counter() {
  const [number, setNumber] = useState(slow);

  const handleClick = useCallback(() => {
    setNumber(number + 1);
  },[number]);

  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}>
        {" "}
        +{" "}
      </button>
    </>
  );
}

export default Counter;
