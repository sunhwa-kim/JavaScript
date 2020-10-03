'use strict'

const arr = [];
for(let i=0; i<10 ;i++){
    arr.push(i)
}

// accumulatro += current 
const sum = arr.reduce((accumulator, current) => accumulator + current, 0); // 0은 accumulator 초기값
console.log(`sum : ${sum}`);

const avg = arr.reduce((accumulator, current, index, array) => {
    if (index === arr.length - 1) {
        return (accumulator + current) / arr.length;
    }
    return accumulator + current;
},0);

console.log(`avg : ${avg}`);


const alphabets = ['a','a','a','b','c','c','c','d','e']

const counts = alphabets.reduce((acc, current) => {
    if(acc[current]){
        acc[current] += 1

    } else {
        acc[current] = 1
    }
    return acc;
}, {} )  // reduce( () => {코드블락}, {객체 초기값} )

console.log(counts);


function countBiggerThanTen(numbers) {
    // filter 조건 참인 원소 담은 배열 반환
    return numbers.filter(n => n>=10).length;

    /*
   const cnt = numbers.reduce((acc, c) => {
        if(c>=10) {
            acc += 1
        } 
        return acc
   }, 0)
   return cnt
   */
    /* 
   let cnt = 0
    numbers.forEach(num => {
        if (num >=10){
            cnt += 1
        }
    })
    return cnt
    */
}

// class ... reduce 아직 잘 이해 못하겠당
function countBiggerThanTenRef(numbers) {
    return numbers.reduce((acc, current) => {
      if (current > 10) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }

const count = countBiggerThanTen([1,2,3,5,10,20,30,50,60]);
console.log(count);