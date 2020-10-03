'use strict'

const cat = {
    species:'CAT', 
    name : '냥이',
    sound : '야옹',
    2 : '나이',
    charming : {
        a:'cute'
    },
    'no key with space':'but Quotation possible',
    say: function say() {
        // 자신이 속한 객체로 이동 = this
        console.log(this.sound);
    },
    say2() {
        // arrow function 은 this X
        console.log(this.sound);
    }
};

console.log(Object.entries(cat));  // 배열로 반환
console.log(Object.keys(cat));
console.log(Object.values(cat));

console.log('for in ---------------------');
for (let key in cat) {
    console.log(`${key} : ${cat[key]}`);  // 주석까지?
}

const lion = {
    species:'subOrder-Feliformia',
    _name : '리온',
    sound : '왕!',
    get name(){
        console.log('이름 조회...');
        return this._name;
    },
    set name(value) {
        console.log(`이름 변경 ${value}`);
        this._name = value;
    }
};

// this 비교
cat.say2();
lion.say = cat.say2;
lion.say();
// this 가 속한 곳이 없어
const lionSay = cat.say;
// lionSay();  //  error


console.log('\n\n>>>>> destructrue : 객체, 배열 가능(hi_arr 참고)');
//  객체 비구조화
function print(animal){
    const text = `이 ${animal.species}(${animal.charming.a}!)의 이름은  ${animal.name}입니다.`;
    console.log(text);
};


// 함수에도 비구조 할당, default는 '=' 이용
function printA({ specie, charming, name, etc='?' }){
    const text = `이 ${species}(${charming.a}!)의 이름은  ${name}입니다.`;
    console.log(text);
    console.log(etc);
}

const {species, charming, name, age=0 } = cat;
console.log(species);
console.log('default check : age => ',age);


print(cat);
printA(cat);

console.log(lion._name);
lion.name = '라이언';
console.log(lion.name);

// 비구조 할당으로 key명 변경
const { name : nickName } = lion;
console.log('nickName check : ',nickName);


console.log('\n\n>>>>>>   객체 접근 \n');
const deepObject = {
    state : {
        information: {
            nameA: 'sunhwa',
            languages:['korean','english'],
            teacher : 'velopert'
        }
    },
    value : 5
}

// 둘중 깔끔해 보이는 것 위주로 선택
// 첫번째 방법
const { nameA, languages } = deepObject.state.information;  // 객체 key명 일치, name = '냥이' 나와
const { value } = deepObject;

const extracted = {
    nameA,
    languages,
    value
};

console.log(extracted);

// 두번째 방법  
// +nameA는 중복되서 안돼 -> 주의! extractedSec의 nameA,value는 첫번째 받은 비구조할당을 가져온 것. 
const {
    state: {
        information: {
            nameB, languages : [first, second]
        }
    },
    valueA
} = deepObject;

const extractedSec = {
    nameA,
    first, second,
    value
};
console.log(extractedSec);