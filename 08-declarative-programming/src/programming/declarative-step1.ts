import createState from "@/lib/createState"
const container = document.getElementById('declarative-programming')


const checkbox = container?.querySelector('input[type="checkbox"]') as HTMLInputElement
const button = container?.querySelector('button') as HTMLButtonElement;

// 선언형은 바뀌어야하는 것을 먼저 선언
// checked의 값에 따라 UI가 변경될 것.
const data = {
  checked: false
}

// 컴포넌트
const render = () =>{
  const {checked} = state;

  checkbox.checked = checked;
  if(checked){
    button.removeAttribute('disabled')
    button.textContent = '활성 상태'
  }else{
    button.setAttribute('disabled', 'true');
    button.textContent = '비활성 상태'
  }


}

// state : 현재 상태, setState : 상태를 업데이트하고 render()를 실생시켜주는 함수
// React의 useState와 유사하다.
const [state, setState] = createState(data, render)
console.log('초기 상태', state.checked)

// function update(){
//   const nextCheckedValue = !state.checked

//   setState('checked', nextCheckedValue)
// }

declare global {
  var update: (value:boolean) => void;
}

// setState를 호출 시 render() 함수도 같이 호출됨 -> UI 갱싱
// globalthis에 등록한 이유 : 브라우저 콘솔에서 업데이트 테스트
const update = (globalThis.update = (value:boolean) => {
  setState('checked', value)
})


checkbox.addEventListener('change', (e:Event) => {
  const {checked} = e.target as HTMLInputElement;

  update(checked)
})

// globalThis.update = update; // 전역에 update를 올려 실행할 수 있게 함 ( 콘솔에서 실행 가능 )

