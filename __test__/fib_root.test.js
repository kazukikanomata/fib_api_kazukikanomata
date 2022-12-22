const express = require("express");
const app = express();
const { fib } = require("../fib");
const fib_router = require("../routes/fib_root");
const request = require('supertest');

describe("Test", () =>{
    test('-1が代入されたら数字を入力してくださいと、400statusを返却する', () =>{
        request(app)
        .get('/fib')
        .query({ n: '-1' })
        .expect('Content-Type' , /json/)
        .expect('Content-Length' , 15)
        .expect(400)
        .end()
    });
    test('abcが代入されたら数字を入力してくださいと、400statusを返却する' , () =>{
        request(app)
        .get('/fib')
        .query({ n: 'abc' })
        .expect('Content-Type', /json/)
        .expect('Content-Length' , 15)
        .expect(400)
        .end()
    });
    test('0が代入されたら1以上の値を入力してくださいと、400statusを返却する' , () =>{
        request(app)
        .get('/fib')
        .query({ n: '0' })
        .expect('Content-Type', /json/)
        .expect('Content-Length' , 15)
        .expect(400)
        .end()
    });
    test('適切な値を入力して、返却されるか' , () => {
        request(app)
        .get('/fib')
        .query({ n: '10' })
        .expect('Content-Type', /json/)
        .expect('Content-Length' , 15)
        .expect(200)
        .end()
    });
});