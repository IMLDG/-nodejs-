"use strict";//사용 이유=>"보안"자바스크립트를 작성하는 쉬운 방법,올바르지 않은 문법을 사전에 검출 가능.

//모듈
const express=require('express');
const app=express();

const PORT=3000;
//라우팅
const home = require("./routes/home/main");//상대적으로 명시해주어야 함(여기서는 main.js 기준)

//앱 세팅
app.set("views","./views");
app.set("view engine", "ejs");//화면 engine을 ejs로 설정


app.use("/",home);//use-> 미들 웨어를 등록해주는 메서드.(미들 웨어는 추후에 학습하기). '대충 "/(root)"경로로 들어오면 home디렉터리로 가라 라는 뜻인 것 같음'
app.listen(PORT,()=>{
    console.log('서버 가동');
});

//node.js에서의 index.js, app.js, server.js 차이
//=>https://velog.io/@yoounhk/node.js에서의-index.js-app.js-server.js-차이
