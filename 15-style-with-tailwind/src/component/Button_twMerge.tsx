interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary";
}

// import twMerge
import { twMerge } from "tailwind-merge";

function Button_twMerge({ children, className, type = "primary" }: Props) {
  return (
    <button
      type="button"
      className={twMerge([
        `bg-sky-500 px-4 py-2 rounded-full`,
        className,
        type === "primary" ? "text-white" : "text-orange-200",
      ])}
    >
      {children}
    </button>
  );
}
export default Button_twMerge;
