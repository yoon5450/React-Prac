import { createElement } from "./lib/react.js";
import { createRoot } from "./lib/react-dom.js";

const listData = {
  items: [],
};

// 우회해서 데이터를 관리하게끔 함.
const reactiveListData = new Proxy(listData, {
  get(target, prop) {
    return target[prop];
  },

  set(target, prop, newValue) {
    const oldValue = target[prop];

    target[prop] = newValue;
    render();

    return true;
  },
});

const root = createRoot(document.getElementById("app"));

function render() {
  const children = listData.items.map(({ id, title }) => {
    const liElement = createElement(
      "li",
      { key: id, className: "item" },
      createElement("img", { src: `/planet/image-0${id}.jpg`, alt: "" }),
      createElement("span", { className: "content" }, title),
      createElement(
        "button",
        { type: "button", title: "아이템 이동" },
        createElement("img", { src: "/icons/icon.svg", alt: "아이템 이동" })
      )
    );
    return liElement;
  });

  const ulElement = createElement(
    "ul",
    { className: "planet", lang: "en" },
    children
  );

  root.render(ulElement);
}

render();

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 1,
      title: "Life on Earth",
    },
  ];
}, 1000);
