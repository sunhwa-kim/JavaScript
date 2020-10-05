
// usually hoisting is bad
console.log(number);   // undefined : not error
var number = 2;  // Js가 상단에 var number;로 선언되있고, 나중에 대입시키는 방식으로 받아들이기 때문...

myFunc();

function myFunc() {
    console.log('hello ?');
    console.log(a);   // undefined
    console.log(b);   // ReferencError
    var a = 'var?';
    let b = 'let?';
}