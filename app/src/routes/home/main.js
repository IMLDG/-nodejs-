"use strict";

const express=require("express");
const router=express.Router();

const ctrl=require("./home.ctrl");

router.get("/",ctrl.main);
router.get("/login",ctrl.login);

//app.js(=>./main.js)는 routes의 경로를 알지 못하기 때문에 설정 해주어야함
module.exports=router;//외부 파일에서 사용할 수 있도록 해줌