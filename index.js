const express = require("express");
const app = express();
app.listen(3000,console.log("サーバーが開始されました。"));

// 計算処理半分にしたいので動的計画法
function fib(n){
    let a = 1;
    let b = 1;
    for(let i=3; i<=n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// http://example.com/fib?N=99
app.get("/fib", (req, res) => {
    // var result = fib(100);
    // console.log(result);
    res.json({ result: fib(req.query.n) });
});