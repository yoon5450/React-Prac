import React from "react";

function ScrollDown() {
  const handleScrollDown = () => {
    const el = document.querySelector(".buttonGroup");
    el?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const handleScrollUp = () => {
    const el = document.querySelector(".NavContent");
    el?.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  return (
    <div role="group" className="buttonGroup">
      <button type="button" className="scrollDown" onClick={handleScrollDown}>
        <svg
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
        >
          <path
            d="m112 268 144 144 144-144M256 392V100"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth="48px"
          />
        </svg>
      </button>
      <button type="button" className="scrollUp" aria-label="" onClick={handleScrollUp}>
        <svg
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
        >
          <path
            d="m112 268 144 144 144-144M256 392V100"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth="48px"
          />
        </svg>
      </button>
    </div>
  );
}

export default ScrollDown;
