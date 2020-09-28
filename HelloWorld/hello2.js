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
