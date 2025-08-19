import { useCallback, useState } from "react";

function useCount({
  count: initalCount = 0,
  step = 1,
  min = 0,
  max = 10,
} = {}) {
  const [count, setCount] = useState(initalCount);

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  const reset = useCallback(() => setCount(initalCount), [initalCount]);

  const increment = useCallback(() => setCount((prev) => {
    let next = prev + step
    if(next >= max) next = max;
    return next
  }), [max, step]);

  const decrement = useCallback(() => setCount((prev) => {
    let next = prev - step
    if(next <= min) next = min;
    return next
  }), [min, step]);

  return {
    count,
    step,
    isMinDisabled,
    isMaxDisabled,
    increment,
    decrement,
    reset
  }
}

export default useCount;
