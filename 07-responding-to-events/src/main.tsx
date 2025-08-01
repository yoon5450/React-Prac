import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Learn from "./learn";
import '@/styles/global.css'

const container = document.getElementById("root");

if (!container) {
  throw new Error("문서에 #root 요소가 존재하지 않습니다.");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <Learn />
  </StrictMode>
);
