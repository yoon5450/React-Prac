import { memo, type ButtonHTMLAttributes } from "react";
import S from "./style.module.css";
import { useCountStore } from "./@store";

function CountButton_({
  children,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement> & { onUpdate: () => void }) {
  const { increment, decrement } = useCountStore();

  return (
    <button
      type="button"
      className={S.button}
      onClick={decrement}
      {...restProps}
    >
      {children}
    </button>
  );
}
export default memo(CountButton_);
