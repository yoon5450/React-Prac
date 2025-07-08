import { createElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";
import { isValidElement } from "./lib/react.js";

console.log(createElement)
console.log(createRoot)


// actual DOM
/*
실제 DOM 구성 (엘리먼트 트리)
웹 API 사용해서 문서 객체 생성
*/

// 부모 요소 생성 
const divElement = document.createElement('div');

// 자식 요소 생성
const buttonElement = document.createElement('button');

// 자식 요소 설정
buttonElement.setAttribute('type', 'button');
buttonElement.textContent = 'hello'


divElement.append(buttonElement);

const actualDomElement = document.getElementById('app');

actualDomElement.append(divElement);


/*

virtual DOM
가상 문서 객체 모델
실제 DOM을 추상화

*/

// API : createElement(type, props, ...children)
// props에 자식 요소를 넣으나 children에 넣으나 같은 동작을 함.

const buttonV_Element = createElement('button', {type:'button'}, 'hola')
const divV_Element = createElement('div', {className:'tiger'}, buttonV_Element)


const VirtualDomElement = document.getElementById('app');
const vRoot = createRoot(VirtualDomElement)

console.log(vRoot)

vRoot.render(divV_Element)

