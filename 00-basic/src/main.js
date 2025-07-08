

import React from './lib/react.js';
import ReactDOM from './lib/react-dom.js';
import react from './lib/react.js';
import reactDom from './lib/react-dom.js';
import { Greeting } from './data.js';


console.log(React.version);
console.log(ReactDOM.version)

const button = React.createElement('button', { type: 'button' }, 'hello')

const div = React.createElement('div', {className:'tiger', lang:'en', 'aria-label': '버튼 태그의 부모'}, button);

const app = document.getElementById('app');

const root = ReactDOM.createRoot(app);

root.render(div);



// React Api를 이용해서
// data에서 랜덤한 인사말 1개 선택 후 h1 태그로 렌더링
// 

const keys = Object.keys(Greeting);
const key = keys[Math.floor(Math.random() * keys.length)];
const value = Greeting[key];

const h1 = react.createElement('h1', {name:'나라별 인사말'}, value) 
const div1 = React.createElement('div', {}, h1)
root.render(div1);