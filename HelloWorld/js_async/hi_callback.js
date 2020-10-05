'user strict'

function work() {
    const start = Date.now();
    for (let i =0 ; i< 99 ; i++){

    }
    const end = Date.now();
    console.log(end-start +'ms');
}

// 비동기적 처리 방식으로 전환
function changedWork(callback){
    setTimeout( () => {
        const start = Date.now();
        for (let i =0 ; i< 99 ; i++){

        }
        const end = Date.now();
        console.log(end-start +'ms');
        callback(end-start);
    },0);
    // 최소 4ms

}

console.log('시작');
// work();
// changedWork();
changedWork((ms) => {
    console.log(' -- The End --');
    console.log(ms+' ms 걸렸습니다.');
});
console.log('다음 작업');  // changedWork의 for loop 도는 동안 실행 되고 끝난뒤 함수 결과