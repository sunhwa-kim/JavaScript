'user strict'


// p.s spread
// 객체, 배열, 함수의 parameter
console.log('\n\n<<<<< rest-객체 \n');

const purpleSlime = {
    name : '슬라임',
    attribute : 'cute',
    color : 'purple'
};

const { color, ...rest } = purpleSlime;
console.log(color);
console.log(rest);  // color뺀 나머지 속성을 모아와

const { attribute, ...slime} = rest;
console.log(slime);  //  name만 남은

console.log('\n\n<<<<< rest - 배열 \n');
const horoscope = ['leo','aquarius','libra','capricorn'];
const [ zero,one,...theLast] = horoscope;   // rest는 마지막에만 (첫번째 No)
console.log(zero);
console.log(one); 
console.log(theLast); 


console.log('\n\n<<<<< rest - 함수 \n');
// parameter : 함수에서 받아오는 값
// 인자 : 함수 사용시 넣어주는 값
// 여기서 rest는 parameter != 인자
const sum = (...rest) => {
    return rest.reduce( (acc, current) => acc + current, 0);
}

const spreads = [1,2,3,4,5]
// 여기서 넣어주는건 인자 != parameter
console.log(sum(...spreads));


function maxClass(...numbers) {
    return numbers.reduce(
      // acc 이 current 보다 크면 결과값을 current 로 하고
      // 그렇지 않으면 acc 가 결과값
      (acc, current) => (current > acc ? current : acc),
      numbers[0]
    );
  }
  

const max = (...arr) => {
    // let result = 0
    // arr.forEach((a)=>{
    //     result < a ? result=a : result
    // })
    // return result;

    return arr.find(a => result<a? a:result);
}

const num_arr = [1,2,3,4,10,7,8,9];
const result = max(...num_arr);
console.log(result);
console.log(maxClass(...num_arr));



