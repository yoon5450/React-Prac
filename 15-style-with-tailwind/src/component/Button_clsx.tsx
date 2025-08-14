import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "primary" | "secondary";
}

// clsx - classname 조건식을 가장 쉽게 사용할 수 있는 라이브러리

function Button_clsx({ children, size, className }: Props) {
  return (
    <button
    // 클래스 중복 관리는 안 되기 때문에 TWmerge를 같이 사용
      className={
      twMerge(clsx(
        "bg-sky-500 px-4 py-2 rounded-xl",
        size === "sm" && "px-2 py-1 text-sm",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",
        className
      ))}
    >
      {children}
    </button>
  );
}
export default Button_clsx;
