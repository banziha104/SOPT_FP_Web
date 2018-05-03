
let arr = [];

for (let i =0 ; i<=500 ; i++){ arr.push(`${i}`)}

let evenList = [];

for(let i in arr){
  let temp = i*1;
  if(temp % 2 == 0){
    evenList.push(temp*1)
  }
}

let result = 0;
for(let value in evenList){
  result += evenList[value]
}
console.log(result)

let result2 =
  arr
    .map((i)=> i * 1)
    .filter((i)=> i % 2 == 0)
    .reduce((result,num) => result + num)

console.log(result2)





