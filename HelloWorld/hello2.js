for (let i=0, j=3; i < 5 ; i++, j= j*j) {
    console.log('i++ , j*j',i,j);
}

for (let i=0; i<5;i++){
    console.log(i);
    if(i<3){
        continue;
    }
    console.log('behind continue');
}

// 무한루프
// for (;;){
//     console.log('start');
//     if(Math.random() * 100 > 90){
//         break
//     }
// }

// while(true){
//     console.log('start');
//     if(Math.random() * 100 > 90){
//         break
//     }
// }

// do {
//     console.log('한 번은 실행');
// } while (Math.random() * 100 <= 90);


// for of + iterable 
// for in + 모든 프로퍼티

for (const i of [1,2,3]){
    console.log(i);
}

Object.prototype.test = () => {};
for (const i in {a:1,b:2,c:3}){
    console.log(i);
    // prototype안의 test 까지 출력 - 주의
}

// function
function hello(){
    console.log('내장객체');
}

console.log(hello, typeof hello);

function hello2(test) {
    return `hello2 ${test}`;
}
console.log(hello2('KimSunHwa'));

const hello3 = (name) => {
    return `hello3 ${name}`;
}
console.log(hello3('Kim SunHwa'), typeof hello3);


// 선언적 함수, 익명함수 만들어 변수 할당 차이점
helloA();
var helloB;
console.log(helloB);   //  undefined

function helloA() {
    console.log('A 선언 위치 차이');
}

// helloB();  // error not function
helloB = function() {
    console.log('B hoisting');
}

// helloC();   //  error not defined
const helloC = function() {
    console.log('helloC-const');
}


// 생성자 함수로 만들어 사용법 - 잘 안쓰임
const helloD = new Function('a','b','c','return a+b+c');  // 매개변수를 문자열로 작성, 가장뒤에 반환값
console.log(helloD(1,2,3));  // no hoisting - error not defined

//  cf. function

globalThis.a = 0;

{
    const a = 1;   // not defined - global.a만 읽음 (전역변수 X)

    const test = new Function('return a');

    console.log(test());
}

{
    const a = 2;

    const test = function() {
        return a;
    };
    console.log(test());
}

const helloE = name => {
    console.log('helloE', name);
};
const helloF = (name, year) => {
    // console.log('helloF', name, age);
    return `helloF, ${name}, this year ${year}`
}
const helloG = (name, year) => `helloG, ${name} since ${year}`;

console.log(helloE('arrow function'));
console.log(helloF('SunHwa','2020'));
console.log(helloG('development','2019'));


function Person(name, area) {
    console.log('this ? ',this);
    this.name = name;
    this.area = area;
}

const a = new Person('Sunhwa','Seoul');
console.log(a, a.name, a.area);

// arrow function은 this를 만들지 않음
/*
const Dog = (name, species) => {
    console.log('this? ', this);
    this.name = name;
    this.species = species;
}
const b = new Dog('멍뭉이','Poodle');
*/

// callback : 함수를 인자로 하여 함수 호출

function helloH(a){
    console.log('callback');
    a();
}

helloH( () => {
    console.log('콜백');
} );
