

const container = document.getElementById('imperative-programming')!;
const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement
const button = document.querySelector('button') as HTMLButtonElement;


function handleChange(e:Event){
  const {checked} = e.target as HTMLInputElement; // dir로 찍어봤을 때 객체를 가지고 있으므로 구조분해할당

   if(checked){
    button.removeAttribute('disabled');
   }else{
    button.setAttribute('disabled', 'true')
   }
}

checkbox.addEventListener('change', handleChange)