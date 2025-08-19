import { create } from "zustand";

type Store = {
  count: number;
  step: number;
  max: number;
  min: number;
  reset: () => void;
  increment: () => void;
  decrement: () => void;
  setStep: (newStep: number) => void;
};

// export const useCountStore = create<Store>()((set) => ({
//   count:1,
//   step:1,
//   increment: () => set((state) => ({count:state.count + 1})),
//   decrement: () => set((state) => ({count:state.count - 1})),
// }));

export const useCountStore = create<Store>()((set, _get, store) => {
  const increment = () => {
    set(({ count, step, max }) => {
      let next = count + step;
      if (next >= max) next = max;
      return { count: next };
    });
  };

  const decrement = () => {
    set(({ count, step, min }) => {
      let next = count - step;
      if (next <= min) next = min;
      return { count: next };
    });
  };

  const setStep = (newStep: number) => {
    set({ step: newStep });
  };

  const reset = () => {
    // 초기값으로 되돌리기
    set(store.getInitialState());
  };

  return {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
    increment,
    decrement,
    setStep,
    reset,
  };
});
