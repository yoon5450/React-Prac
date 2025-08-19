import { memo, type ButtonHTMLAttributes } from "react";
import S from "./style.module.css";
import { useCountStore } from "./@store";

function CountButton({
  children,
  type = "+",
  ...restProps
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  type?: "+" | "-";
}) {
  const handler = useCountStore((s) => type === '+' ? s.increment : s.decrement)

  return (
    <button
      type="button"
      className={S.button}
      onClick={handler}
      {...restProps}
    >
      {children}
    </button>
  );
}
export default memo(CountButton);
