# fib_api_kazukikanomata

## 言語
<p>Node.jsのフレームワークExpressを使ってみる。</p>
<p>サーバーサイドのJavaScriptに挑戦してみる。</p>

## フィボナッチ数列の一般項は以下のような感じ
![fibonaccinumbers-def](https://user-images.githubusercontent.com/77597098/208242271-1ef058ff-6115-49b1-94be-45803aa596e5.png)

### 処理時間長い
```
function fib(n){
    if(n < 2){
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
```

### 処理時間早い
<p>計算したもので、次の数を表示していく。</p>

```
// a = fib(1) , b= fib(2) , c = fib(3)
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
```
### 要求仕様をテーブルに起こしてみた
<p>ブラックボックステストを中心に、同値分析法・境界値分析法を意識し表を作成</p>

|       | 有効同値         | 無効同値               | 境界値   | 
| ----- | ---------------- | ---------------------- | -------- | 
| 入力n | 1 ～ 無限大？（∞） | 0, -1　～ -無限大？（-∞） | 0, 1, -1 |



### デプロイ
URL: https://fib-api-kazukikanomata.herokuapp.com/