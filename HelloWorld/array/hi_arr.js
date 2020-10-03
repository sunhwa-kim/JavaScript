'use strict'

// (),{},[] 소,중,대 괄호
const objects = [
    {   id : 1,
        item : 'sofa',
        order_status : true
    },
    {   id : 2,
        item : 'couch',
        order_status : true
    }
]

console.log(objects);
console.log(objects[0]);
console.log(objects[0].item);

objects.push(
    {   id : 3,
        item: 'deckchair',
        order_status : false
    }
)
console.log(objects);

console.log(objects.length);

const texts = objects.map(obj => obj.item);
console.log(texts);

//  indexOf, findIndex, find : 찾은 첫번째 값의 위치/값 반환
// no indexOf()
const idx = objects.findIndex( obj => obj.id === 3);
console.log(idx);

// 객체, 원소 등 찾은 값으로 반환
const res = objects.find( obj => obj.id===2);
console.log(res);

// 배열 반환
const orderNotDone = objects.filter( obj => !obj.order_status );
console.log(orderNotDone);


console.log('\n-------------시작   배열 내장 함수  --------------------');
// array 내장함수 ~*

const superheroes = ['아이언맨','닥터 스트레인지','토르']

/*
function print(arr){
    console.log(arr);
}

superheroes.forEach(print);
*/

superheroes.forEach((hero)=>{
    console.log(hero);
})

const index = superheroes.indexOf('닥터 스트레인지');  // 1
console.log(index);

console.log('\n -------------  배열 내장 함수 map, reduce  -----------------');
// map : 배열 원소 변환시 사용
const arr = [];
for(let i=0; i<10 ;i++){
    arr.push(i)
}
// arr.forEach((num)=> console.log(num));
// console.log(arr);

const s = [];
arr.forEach( n => { s.push( n*n ) });

const square = n => n*n;
const squared = arr.map(square);
// const squared = arr.map(n => n*n);
console.log(squared);

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

// 기존 배열 유지
const sliced = arr.slice(0,5);
console.log(sliced);

//  삭제 - 기존 배열 변화
const idxFive = arr.indexOf(5);   
const spliced = arr.splice(idxFive, 2);
console.log(arr);
console.log(spliced);


const val_behind = arr.pop();
console.log(val_behind);
arr.push(val_behind);

// pop(0)
const val = arr.shift();  // 비어져도 계속 
console.log(val);

arr.unshift(100);
console.log(arr);

console.log('\n\n<<<<<  배열 합하기');
//  여러 배열 합치기 _ 기존 배열 유지, 새 배열 생성
const concated = superheroes.concat(arr);
console.log(concated);

const spread_concated = [...superheroes, ...arr];
console.log(spread_concated);

// join은 배열안의 값들을 문자열로 반환  == python
console.log(superheroes.join());

// console.log(superheroes.join(' + '));
const super_text = superheroes.join(' + ');
console.log(typeof super_text);
console.log(super_text);

console.log('\n---------     배열 비구조 할당 (hi_obj 참고)    ----------');
console.log(arr);

const [one, two = -1] = arr;  // default 추가
console.log(one);
console.log(two);