import react from "./lib/react.js";
import reactDom from "./lib/react-dom.js";
import { listData } from "./data.js";

//  <li class="item">
//   <img src="/planet/image-01.jpg" alt="" />
//   <span class="content">Life on Earth</span>
//   <button type="button" title="아이템 이동(위/아래 화살표 키 활용)">
//     <img src="/icons/icon.svg" alt="아이템 이동(위/아래 화살표 키 활용)" srcset="" />
//   </button>
// </li>

const app = document.querySelector(".planet");
const root = reactDom.createRoot(app);

let img = react.createElement("img", {
  src: "/planet/image-01.jpg",
  alt: "아이템이미지",
});
let span = react.createElement("span", { class: "content" }, "Life on Earth");
let buttonIcon = react.createElement("img", {
  src: "/icons/icon.svg",
  alt: "아이템 이동(위/아래 화살표 키 활용)",
});
let button = react.createElement(
  "button",
  { type: "button", title: "아이템 이동(위/아래 화살표 키 활용)" },
  buttonIcon
);
const item = react.createElement("li", { class: "item" }, img, span, button);

let itemElList = listData.items.map((el) => {
  return react.createElement(
    "li",
    { className: "item", key: el.id },
    react.createElement("img", {
      src: "/planet/image-0" + el.id + ".jpg",
      alt: "아이템이미지",
    }),
    react.createElement("span", { className: "content" }, el.title),
    react.createElement(
      "button",
      { type: "button", title: "아이템 이동(위/아래 화살표 키 활용)" },
      react.createElement("img", {
        src: "/icons/icon.svg",
        alt: "아이템 이동(위/아래 화살표 키 활용)",
      })
    )
  );
});

// 이렇게도 되는구나?
const liElement =
  ("li",
  { className: "item" },
  react.createElement("img", {
    src: "/planet/image-01.jpg",
    alt: "아이템이미지",
  }),
  react.createElement("span", { class: "content" }, "Life on Earth"),
  react.createElement(
    "button",
    { type: "button", title: "아이템 이동(위/아래 화살표 키 활용)" },
    react.createElement("img", {
      src: "/icons/icon.svg",
      alt: "아이템 이동(위/아래 화살표 키 활용)",
    })
  ));

root.render(itemElList);
