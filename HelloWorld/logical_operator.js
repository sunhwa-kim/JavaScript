'use strict'

console.log( '--------------  삼항 연산자  -----------------'  );
// 삼항 연산자
const arr = [];
let text = arr.length === 0 
    ? '배열 비었어요' 
    : '배열 원소 있어요';
console.log(text);


// bad => if
const condition1 = false;
const condition2 = false;

const result = condition1
    ? 'nope'
    : condition2
        ? 'nope'
        : '1 ok -> 2 ok'
console.log(result);


console.log( '--------------  Truthy and Falthy  -----------------'  );

// JS Falthy한 값이라서 false : 0, '', NaN (not a number) , undefiend, null, false
// 그 외에는 Truthy : [],{}
console.log(!undefined);
console.log(!null);

const print = (person) => {
    // null checking
    /*
    if (person === ndefined || person === null){
        return; // 그냥 아무것도 하지마
    }*/
    if(!person){
        return ;
    }
    console.log(person.name);
}

/*  
const person = {
    name : 'sunhwa'
}
*/
const person = null;   // TypeError : null

print(person);
// print(); //  TypeError : undefiend


// truthy, falthy 판단 방법
const value = null;
// const truthy = value ? true : false;
const truthy = !!value;  // !!false -> !truth -> false
console.log(truthy);


console.log( '------------  Short-circuit evaluation  -------------'  );
// Short-circuit evaluation  단축 평가 논리 계산법 => React  조건부 랜더링
//  논리연산자 사용으로 코드 간략화
console.log(' << AND 연산자 >> ');
console.log(true && '앞 T면 뒤');  // AND 연산자 : 앞이 참이면 결과물은 뒤에 것 
console.log(false && 'hello');  //  앞이 Falthy이면 stop
console.log('hello' && 'bye');
console.log(null && 'hello');

console.log(' << OR 연산자 >>');  // 어떤 값이 없을 때 , 대신 사용하고자 할때
console.log(1 || 'nope');  // 1   OR 연산자 : 앞이 참이면 결과물 앞의 것 (뒤까지 X)
console.log(false || '앞 F면 뒤!');  // hello
console.log(null || 'null !');  // null !
console.log(undefined || 'undefined');

const cat = {
    name : '냐용'
}

const getName = (animal) => animal && animal.name;
/*
{
    if(animal){
        return animal.name;
    }
    return;
}*/


// const name = getName(cat);
const name = getName();  // undefined : parameter 없을때 return 자동 처리
console.log(name);

const object = null;
// const objcet = {name:'ok'}
const name_obj = object && object.name;  // null
console.log(name_obj);


const namelessCat = {
    neme:'냐옹이'
}

const getNameA = (animal) => {
    const name = animal && animal.name;
    return name || '이름 없습니다.'
}

const nameA = getNameA(namelessCat);
console.log(nameA);


console.log( '------------  함수 기본 파라미터  -------------'  );
// 함수에 기본 파라미터 없을때 default 처리

// es6
const calculateCircleArea = (r = 1) => Math.PI * r * r;

/*
// 단축 평가 논리 계산법 이용시
const calculateCircleArea = (r) => {
    const radius = r || 1;
    return Math.PI * radius * radius;
}*/

const area = calculateCircleArea();
console.log(area);


console.log( '------------  조건문  -------------'  );
// let isAnimal = (text) => text==='고양이' || text==='개' || text==='사자' || text==='토끼';

// 비교 하고 싶은 걸 배열에
let isAnimal = (text) => ['고양이','개','거북이','낙타'].includes(text);

console.log(isAnimal('개'));  // true
console.log(isAnimal('노트북'));  // false

// 조건에 따라 달라질 때 객체 이용
const getSound = (animal) => {
    const sounds = {
        개 :'멍멍',
        고양이:'냐옹',
        참새:'짹짹',
        비둘기:'구구 구구'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개'));
console.log(getSound('인간'));

const makeSound = (animal) => {
    const tasks = {
        개:() => console.log('멍멍'),
        고양이:()=>console.log('냐옹'),
        비둘기:()=>console.log('구구 구구')
    }
    
    const task = tasks[animal];
    if(!task){
        console.log('...?');
        return;
    }
    task();
}

makeSound('비둘기');
makeSound('lion');