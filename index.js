const express = require("express");
const app = express();
const port = 3000;
app.listen(port);
console.log("サーバーが開始されました。");

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

// 文字かどうかを判定
// function isNaN(n){
//     if (typeof n !== "string" || n === ""){
//         // 文字列です
//         return true;
//     } else {
//         // 文字列ではない
//         return false;
//     }
// }

// ステイータスコードが雑なのはだるいね。

app.get("/", (req, res) =>{
    return isString("ahdjkdhekk");
});

app.get("/fib", (req, res) => {
    // req.query.n → numberのこと 具体例：n=10
    const input_value = req.query.n;
    const inputExists = isNaN(input_value);
    const hasPositiveNumber = Math.sign(input_value);
    
    // 計算した値。
    const result = fib(input_value);
    if (inputExists == true){
        return res.status(400).json({
            "status": 400,
            "message": "数字を入力してください"
        });
    } else {
        // プラスの時
        if (hasPositiveNumber === 1){
            // 最終的な答え
            return res.status(200).json({
                "status": 200,
                "result": result
            });
        //　0の時 
        }
        if (hasPositiveNumber === 0){
            return res.status(401).json({
                "status": 400,
                "message": "1以上の値を入力してください"
            });
        } 
        if(hasPositiveNumber === -1) {
            return res.status(402).json({
                "status": 400,
                "message": "正の数を入力してください"
            });
        }
    }
});