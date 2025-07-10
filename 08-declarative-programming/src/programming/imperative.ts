const template = /* html */`
  <form id="form">
    <h2>프로그래머스 퀴즈!</h2>
    <p>프로그래머스에서 가장 잘생긴 사람은?</p>
    <textarea id="textarea"></textarea>
    <br />
    <button type="submit" id="button">Submit</button>
    <p id="loading" style="display:none">Loading...</p>
    <p id="error" style="display:none; color:red;">error!</p>
  </form>
  <h1 id="success" style="display:none">정답입니다~~~!!</h1>
  <hr />
`

const app = document.getElementById('app');
app?.insertAdjacentHTML('beforeend',template);

/* -- ----------------------------------------- */



const form = document.getElementById('form') as HTMLFormElement;
const textarea = document.getElementById('textarea') as HTMLTextAreaElement;
const button = document.getElementById('button') as HTMLButtonElement;
const loading = document.getElementById('loading') as HTMLParagraphElement
const error = document.getElementById('error') as HTMLParagraphElement;
const success = document.getElementById('success') as HTMLHeadingElement;


const hide = (el:HTMLElement) => el.style.display = 'none';
const show = (el:HTMLElement) => el.style.display = 'block';
// el로 확장시킴
const enable = (el:HTMLElement & {disabled:boolean}) => el.disabled = false; // 여기서는 속성이 아니라 프로퍼티로 제어
const disable = (el:HTMLElement & {disabled:boolean}) => el.disabled = true;


const handleTextareaChange = () => {
  if(textarea.value.length === 0){
    disable(button);
  }else{
    enable(button);
  }
}


const submitForm = (answer:string):Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(answer.toLowerCase() === '심선범'){
        resolve('👍');
      }else{
        reject(new Error('땡! 너는 이미 정답을 알고있다.'));
      }
    }, 1500);
  })
}


const handleFormSubmit = async (e:SubmitEvent) => {
  e.preventDefault();
  disable(textarea)
  disable(button)
  show(loading);
  
  try{
    await submitForm(textarea.value)
    show(success)
    hide(form)
  }catch(err){
    show(error)
    if(err instanceof Error){ // 타입 가드
      error.textContent = err.message;
    }
  }
  finally{ // 오류 시
    hide(loading);
    enable(textarea);
    enable(button);
  }
}


// submitForm('윤대웅') resolve , reject



textarea.addEventListener('input',handleTextareaChange);
form.addEventListener('submit',handleFormSubmit)