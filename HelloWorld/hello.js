'use strict'

let num = 1;
console.log(num++);  // 1  보여준 후 계산
console.log(num);    // 2
console.log(++num);  // 3  계산 후 보여줌

let bool = !false;
console.log(bool);  // true
console.log(bool && bool);  // true
console.log(!bool || !bool);   // false

// ! > && > ||
const boolA = !(true && false || true && false || !false); 
// ()안의 !false 가장 먼저 = true -> && 하고 || 후 -> !(true)
// ( (true&&valse) ) 식으로 저장 하면서 자동으로 괄호 감싸짐
console.log('boolA',boolA);   // false

// 비교 연산자
let a = null;
let b = undefined;

if (a==b){
    console.log(a==b); // true
}

console.log('== : ',0==false);   // true
console.log('== : ',1==true);    // true
console.log('== : ','1'==1);     // true

// 지향
if (a===b){
    console.log(a!==b);
}else{
    console.log(a===b);  // false
}


let c = Number('test of typecasting');
let d = Number('2020');
console.log(c, typeof c);   // NaN number
console.log(d, typeof d);   // 2020 number

// template string - es6
let aa = 'string test ';
const e = aa + ' ok';
const f = `${aa} ok`;
console.log(e, typeof e);
console.log(f, typeof f);


// Symbol es6
const g = Symbol();
const h = Symbol(37);
const m = Symbol('test');
const o = Symbol('test');

console.log(g, typeof g);
console.log(m===o);


if(true) console.log('항상 실행');
if(false) console.log('절대 실행 되지 않음');

if({}) console.log('{} Truthy',{});
if(-1) console.log('-1 Truthy' , -1);


const n = 15;
const multipleOfThree = n%3 ===0;
const multipleOfFive = n%5 ===0;

if(multipleOfThree && multipleOfFive ){
    console.log('n 은 15의 배수');
} else if (multipleOfThree){
    console.log('n 은 3의 배수');
} else if (multipleOfFive ){
    console.log('n 은 5의 배수');
} else{
    console.log('n은 3의 배수도 아니고, 5의 배수도 아니다.');
}

// 중첩 이용
if(multipleOfThree && multipleOfFive ){
    console.log('n 은 15의 배수');
} else {
    if (multipleOfThree){
        console.log('n 은 3의 배수');
    } else if (multipleOfFive ){
        console.log('n 은 5의 배수');
    } else{
        console.log('n은 3의 배수도 아니고, 5의 배수도 아니다.');
    }
}

// &&  순서 : 앞 표현식 참 일때만, 뒤 표현식 평가 필요 생겨서 뒤의 표현식 실행
let nn = 5;
(nn%5===0) && console.log('and 연산자 , 앞 이 참이기 때문에  뒤 실행 ');

// || : 둘 중에 하나만 참이면 참 => 앞 표현식 참이면 뒤 표현식 평가할 필요 없어서 실행하지 않는다.
nn = 5
n%5 ===0 || console.log('or연산자 앞이 참이면 그냥 실행');

n%6 === 0 || console.log('or연산자 앞 false 시 실행');


// 삼항연산자
let nA = 5;
console.log( nA % 5 === 0 ? 'True' : 'False');

// switch
let nB = 7;
switch (nB % 5) {
    case 0 : {
        console.log('True 5 의 배수');
        break;  // break 없으면 참인 case 와 default 같이 실행
    }
    case 2 :
        console.log('True 5의 배수 아님');
    default:
        console.log('무관하게 실행');
}

