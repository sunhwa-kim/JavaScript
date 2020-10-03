'use strict'

class Animal {
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    say() {
        console.log(this.sound);
    }
}

// class 내부에 함수 만들어주면 자동으로 prototype으로 등록
console.log(Animal.prototype.say);

const cat = new Animal('고양이','냐옹이','야옹');

cat.say();


// 상속
class Dog extends Animal {
    constructor(name, sound){
        super('개',name,sound);
    }
}

const dog = new Dog('멍뭉이','멍멍~');
dog.say();