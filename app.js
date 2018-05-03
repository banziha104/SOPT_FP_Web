// 0부터 500까지 들어있는 문자 배열에
// 짝수의 합을 구하라

let arr = []; //iterable 객체

for (let i =0 ; i <= 500; i++) {arr.push(`${i}`)}


let result = arr // 함수의 인자로 들어가는 함수를 -> 콜백함수
  .map((str)=> str*1) //이터러블 객체를 순환하면서 콜백함수를 적용시켜줘요. return String 배열이아닌 Number 배열
  .filter((num) => num % 2 == 0) //true, false 순회를 하면서 true 남겨줌, 짝수만 남음
  .reduce((result,num) => result + num) // result 0 초기화// result에 배열에 담겨져있는 모든 요소를 더해줌

console.log(result)




















// let evenList = [];
//
// for(let i in arr){
//   let temp = i*1;
//   if(temp % 2 == 0){
//     evenList.push(temp)
//   }
// }
//
// let result = 0;
//
// for(let value in evenList){
//   result += evenList[value]
// }
//
// console.log(result)