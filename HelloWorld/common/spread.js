'use strict'

//  spread (obj, arr, 함수)  != rest

console.log('<<<<<  객체 spread 연산자 \n');
// spread 연산자 : 기존 객체 참고해서 새 객체에 새 값 추가
// 대입연산자는 =로 집어넣어져서 기존 객체도 같이 변화
const slime = {
    name : '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
}

const purpleSlime = slime;
purpleSlime.color = 'purple'; 

// color을 spread 연산자 위에서 선언하면 바뀌지 않음, 복사한 형태가 나중에 덮히기 때문
const greenSlime = {
    ...purpleSlime,
    color:'green'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleSlime);
console.log(slime===purpleSlime);   //  true
console.log(greenSlime);   // green != purple


console.log('\n\n<<<<<  배열 spread 연산자 \n');

const stars = ['leo','aquarius'];
const stars2 = ['libra','capricorn'];
const horoscopes = [...stars,...stars2];
console.log(horoscopes);

const stars3 = ['scorpio','virgo']
const hs2 = horoscopes.concat(stars3);
console.log(hs2);


console.log('\n\n<<<<<  함수 spread 연산자 \n');

// parameter : 함수에서 받아오는 값
// 인자 : 함수 사용시 넣어주는 값
// 여기서 rest는 parameter != 인자
const sum = (...rest) => {
    return rest.reduce( (acc, current) => acc + current, 0);
}

const spreads = [1,2,3,4,5]
// 여기서 넣어주는건 인자 != parameter
console.log(sum(...spreads));