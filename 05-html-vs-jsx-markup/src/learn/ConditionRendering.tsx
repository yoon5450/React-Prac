import React from "react";
import reactImagePath from "@/assets/react.svg?url";
import kakaoTalkImagePath from "@/assets/kakao-talk.svg?url";
import nextJsImagePath from "@/assets/next-js.svg?url";
import viteImagePath from "@/assets/vite.svg?url";

function ConditionRendering({ imageType }: { imageType: string }) {
  let iconPath = "";

  const spinnerOrVite = imageType === 'vite' ? 
  (<img src="vite.svg" alt=""/>):
  (<img src='/icons/spinner.svg' alt=""/>)

  switch (imageType.toLowerCase().trim()) {
    case "react":
      iconPath = reactImagePath;
      break;
    case "kakao talk":
      iconPath = kakaoTalkImagePath;
      break;
    case "next.js":
      iconPath = nextJsImagePath;
      break;
    case "vite":
      iconPath = viteImagePath;
      break;
    default:
      break;
  }

  return (
    <>
      <dt>조건부 렌더링(conditional rendering)</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          <img src={iconPath} alt="" />
          <p>{imageType}</p>
        </div>
      </dd>
      <dd>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링되도록 합니다.</p>
        <div className='conditionalRendering'>
          {spinnerOrVite}
        </div>
      </dd>
    </>
  );
}

export default ConditionRendering;
