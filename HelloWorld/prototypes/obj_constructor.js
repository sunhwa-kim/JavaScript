'use strict'

// 1. 객체 생성자 대문자로 시작
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    // 객체 생성 때마다 동일한 데이터 이용하는 똑같은 함수 생성은 비효율적 -> prototype
    // this.say = function() {
    //     console.log(this.sound);
    // }
}

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
// 객체는  prototype 객체에 대한 링크만 가짐
// prototype 설정: 객체들끼리 공유할 수 있는 값이나 함수
Animal.prototype.say = function() {
    console.log(this.sound);
}

// const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹')

cat.say();
console.log(cat.sound);
console.log(cat.say);  // function, 객체 속성으로서의 접근 X



// 2. 객체 생성자 상속
function Dog(name, sound){
    Animal.call(this, '개', name, sound);
}

Dog.prototype = Animal.prototype;  // 공유
const dog = new Dog('멍뭉이','멍멍');

dog.sharedValue;
dog.say()
