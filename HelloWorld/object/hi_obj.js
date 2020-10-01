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


//  객체 비구조화
function print(animal){
    const text = `이 ${animal.species}(${animal.charming.a}!)의 이름은  ${animal.name}입니다.`;
    console.log(text);
};

function printA({ species, charming, name }){
    const text = `이 ${species}(${charming.a}!)의 이름은  ${name}입니다.`;
    console.log(text);
}

const {species, charming, name } = cat;
console.log(species);

print(cat);
printA(cat);

console.log(lion._name);
lion.name = '라이언';
console.log(lion.name);
