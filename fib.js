// 計算処理半分にしたいので動的計画法
const fib = (n) => {
    let a = 1;
    let b = 1;
    for(let i=3; i<=n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};
exports.fib = fib;