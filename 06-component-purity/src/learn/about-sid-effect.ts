

const multiplier = 2


function multiply(n:number):number{
  return n * multiplier;
}



console.log(multiply(3))



function greet(name:string):string{

  console.log(`Hello ${name}!`)
  return `Hello ${name}!`
}

 
greet('정소영');



async function fetchUser(userId:string = ''){
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if(!response.ok){
      throw new Error('유저 정보를 가져오지 못했습니다.')
    }

    const user = await response.json();
    console.log(user);

    const userEl = document.getElementById('user-info');

    if(userEl){
      userEl.textContent = `이름 : ${user.name}, 이메일 ${user.email}`
    }

  }catch(err){

    //타입 좁히기
    if(err instanceof Error)
    console.error('에러 발생!', err.message)
  }
}

console.log(fetchUser)















