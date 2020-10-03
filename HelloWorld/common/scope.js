'use strict'
// global, function, block = {}

const value = 'Hello~~'

const myFunc = () => {
    console.log('myFunc : ');
    console.log(value);
}

const anotherFunc = () => {
    console.log('anotherFunc: ');
    const value = 'bye'
    console.log(value);
}

myFunc();
anotherFunc();
console.log('global scope: ');
console.log(value);   // anotherFunc에서 바뀐게 아닌 예전값 그대로 global

const myFuncScope = () => {
    const value = 'bye!';
    const value2 = '>>> another!';

    const insideFunc = () => {
        console.log('insedFunction: ');
        console.log(value);
        console.log(value2);
    }
    insideFunc();
}

myFuncScope();
console.log('global scope 2 : ');
console.log(value);
// console.log(value2);  // ReferenceError: value2 is not defined

console.log('\n<<<< const scope\n');

const myFuncThird = () => {
    const value = 'bye~~~';
    if (true) {
        const value = 'Hi~~~';
        console.log('block scope: ');
        console.log(value);
    }
    console.log('third function scope: ');
    console.log(value);   //  bye~~~
}

myFuncThird();
console.log('global scope: ');
console.log(value);


console.log('\n<<<< var scope\n');

var varValue = 'Hello';
const myFuncVar = () => {
    var varValue = 'bye~~~';
    if (true) {
        var varValue = 'Hi~~~';
        console.log('block scope: ');
        console.log(varValue);   // Hi~~~
    }
    console.log('function scope: ');
    console.log(varValue);    //  Hi~~~ : 함수내에서는 {} 무관...
}

myFuncVar();
console.log('global scope: ');
console.log(varValue);   // global은 유지


console.log('\n<<<< let scope\n');

let letValue = 'Hello';
const myFuncLet = () => {
    let letValue = 'bye~~~';
    if (true) {
        let letValue = 'Hi~~~';
        console.log('block scope: ');
        console.log(letValue);
    }
    console.log('function scope: ');
    console.log(letValue);  //  bye~~~  {} 별로 유지
}

myFuncLet();
console.log('global scope: ');
console.log(letValue);   // global은 유지