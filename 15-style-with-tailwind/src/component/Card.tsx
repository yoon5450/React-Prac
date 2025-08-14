import { cva } from "class-variance-authority";
import arrow from "@/assets/arrow.svg";
import navigation from "@/assets/navi.svg";
import tw from "@/utils/tw";

interface Props {
  type?: "primary" | "secondary" | "thirtiary";
  logoSrc: string;
  rate: string;
  title: string;
  company: string;
  className?: string;
}

function Card({ type, logoSrc, rate, title, company, className }: Props) {
  return (
    <div
      className={tw(
        "flex gap-2 flex-col bg-white w-66 h-fit p-2 rounded-xl",
        className
      )}
    >
      <div
        className={tw(
          "relative min-w-56 min-h-40",
          type === "primary" && "bg-[#fdf4e5]",
          type === "secondary" && "bg-[#F9F7FE]",
          type === "thirtiary" && "bg-[#F8FCEE]"
        )}
      >
        <span>{rate}</span>
        <img
          className="absolute right-2 top-[0%]"
          src="/icon_bookmark.svg"
          alt=""
        />
        <div>
          <span className="font-bold text-2xl text-wrap w-40">{title}</span>
          <img className="" src={arrow} alt="" />
        </div>
        <img
          className="absolute bottom-2 right-[50%]"
          src={navigation}
          alt=""
        />
      </div>
      <div className="flex px-2 items-center">
        <div className="flex items-center">
          <img src={logoSrc} alt="로고" />
          <span className="mx-3.5 text-wrap font-bold text-base/normal">
            {company}
          </span>
        </div>
        <button
          type="button"
          className="bg-black text-white rounded-2xl min-w-14 h-6"
        >
          View
        </button>
      </div>
    </div>
  );
}
export default Card;
