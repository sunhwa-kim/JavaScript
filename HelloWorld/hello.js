let a = null;
let b = undefined;

if (a==b){
    console.log(a==b);
}

if (a===b){
    console.log(a===b);
}else{
    console.log(a===b);
}


let c = Number('test of typecasting');
let d = Number('2020');
console.log(c, typeof c);
console.log(d, typeof d);

// template string - es6
let aa = 'string test ';
const e = aa + ' ok';
const f = `${aa} ok`;
console.log(e, typeof e);
console.log(f, typeof f);


// Symbol es6
const g = Symbol();
const h = Symbol(37);
const m = Symbol('test');
const n = Symbol('test');

console.log(g, typeof g);
console.log(m===n);
