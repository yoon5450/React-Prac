import moduleName, { createRoot } from "react-dom/client";

const container = document.getElementById("app");

if (container) {
  createRoot(container).render(<div>hello</div>);
} else {
  console.warn("문서에 #app 요소가 존재하지 않습니다.");
}

