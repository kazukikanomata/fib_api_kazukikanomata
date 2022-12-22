const express = require("express");
const app = express();
const router = require('./routes/fib_root');
const port = process.env.PORT || 3000;

app.use('/', router);
app.listen(port);

console.log("サーバーが開始されました。");