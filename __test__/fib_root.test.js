const { fib } = require("../fib");
const fib_router = require("../routes/fib_root");
const request = require('supertest');
const assert = require('assert');
const express = require("express");
const app = express();

// grouping
describe("Test", () =>{
    test('-1が代入されたら数字を入力してくださいと、400statusを返却する', () =>{
        // 入力値がマイナスの時の処理を記入する
        request(app)
        .get('/fib')
        .query({ n: '-1' })
        .expect('Content-Type' , /json/)
        .expect('Content-Length' , 15)
        .expect(400)
        .end(function(err, res) {
            if (err) throw err;
        });
});

// 文字列の時
// test('abcが代入されたら数字を入力してくださいと、400statusを返却する' , () =>{
//     const req = {
//         query: {
//             n: 'abc'
//         }
//     }
//     const res = {
    //         status: jest.fn().mockReturnThis(),
//         json: jest.fn().mockReturnThis()
//     }
//     fib(req, res);
//     expect(res.status.mock.calls[0][0]).toBe(400);
// });

// test('0が代入されたら1以上の値を入力してくださいと、400statusを返却する' , () =>{
//     const req = {
//         query: {
//             n: '0'
//         }
//     }
//     const res = {
    //         status: jest.fn().mockReturnThis(),
    //         json: jest.fn().mockReturnThis()
    //     }
    //     fib(req, res);
//     expect(res.status.mock.calls[0][0]).toBe(400);
// });

// test('適切な値を入力して、返却されるか' , () => {
    //     const req = {
        //         query: {
            //             n: '10'
            //         }
            //     }
            //     const res = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn().mockReturnThis()
//     }
//     fib(req, res);
//     expect(res.status.mock.calls[0][0]).toBe(200);
// });
});