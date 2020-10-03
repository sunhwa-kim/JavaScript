'use strict'

const ironMan = {
    myName : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨',
    sound : '팡',
    _energy : 100,
    depend : 5,
    useup_energy : 0,
    fly(){
        console.log(this.sound);
        this.energy = 5;
    },
    get energy() {
        return this._energy;
    },
    set energy(value) {
        this.useup_energy = value;
        this.energy_calculate()
    },
    energy_calculate(){
        console.log('calculate');
        this._energy -= this.useup_energy;
    },
    get self_introduction() {
        //getter
        console.log('자기소개하기');
        return `${this.alias}, ${this.myName}`
    },
    get name(){
        console.log('이름 조회');
        return this.myName;
    },
    set name(value){
        console.log(`이름 변경 : ${value}`);
        this.myName = value;
    }
};

//  get 안에 fly 에너지 소모 계산 하나로 넣으면 간단하지만,
//  그러면 조회시마다 다시 계산반복 != setter -> calculate() 하면 변경 때만 계산, 조회는 저장된 값만 가져오게 효율적



const captainAmerica = {
    myName : '스티븐 로저스',
    actor:'크리스 에반스',
    alias:'캡틴 아메리카',
    sound : '철컥'
}

function print(hero){
    const text = `${hero.alias}(${hero.myName}) 역할의 배우는 ${hero.actor} 입니다.`;
    console.log(text);
};

// 객체 비구조화 = 객체 구조 분해
function printA(hero){
    const { alias, myName , actor } = hero;
    const text = `${alias}(${myName}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

//  parameter 사용 단계에서 비구조 할당 : 특정 값을 객체에서 빼오는
const { myName } = ironMan;
console.log(myName);

function printB({alias, myName, actor}) {
    const text = `${alias}(${myName}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);
printA(captainAmerica);
printB(captainAmerica);


// getter : ()함수 실행 아닌 조회방식만으로 가능
console.log(ironMan.self_introduction);
ironMan.myName = '스티븐 로저스?'
console.log(ironMan.myName);
ironMan.name = '토니 스타크'
console.log(ironMan.name);
// setter


// this로 인해 자기가 속한 객체의 key를 연결 
// => ironMan.fly내 this가 captainAmerica내에 fly로 생겨서 그 안의 this로서 sound 가져오는 
captainAmerica.fly = ironMan.fly;
ironMan.fly();
captainAmerica.fly();
console.log(`ironMan ph ${ironMan.energy}`);
// 아무것도 없는 것에서 this는 작용 할 수 없지, arrow function 내에서도  this는 길을 잃음.
const captainAmericaFly = ironMan.fly();
// captainAmericaFly();   // TypeError
console.log(`ironMan ph ${ironMan.energy}`);
