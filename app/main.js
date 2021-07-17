"use strict";//사용 이유=>"보안"자바스크립트를 작성하는 쉬운 방법,올바르지 않은 문법을 사전에 검출 가능.

//모듈
const express=require('express');
const app=express();

//앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs");//화면 engine을 ejs로 설정

app.use(express.static(`${__dirname}/src/public`));//express.static=>image,css,js와 같은 정적 파일을 제공해줌, ${__dirname}=>현재 디렉터리 이름

module.exports=app;

//node.js에서의 index.js, app.js, server.js 차이
//=>https://velog.io/@yoounhk/node.js에서의-index.js-app.js-server.js-차이

//pakage.json은 개발에 있어서 굉장히 유용한 것 같음. 기본적인 사용법 반드시 숙지하기
