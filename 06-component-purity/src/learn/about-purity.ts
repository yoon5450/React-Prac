


export function truncateText(text:string, limit:number):string{
  if(text.length > limit){
    return text.slice(0, limit) + '...'
  }
  return text;
}


console.log(truncateText('안녕 클레오파트라 세상에서제일가는포테이토킹', 5))


function square(n:number):number{
  return n * n
}

console.log(square(4));

function sum(arr:number[]):number{
  return arr.reduce((acc, cur) => acc + cur, 0)
}

const arr = [1,2,3]

console.log(sum(arr));