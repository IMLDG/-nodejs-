"use strict";

const app=require("../main");
const PORT=3000;

//라우팅
const home = require("../routes/home/main");//상대적으로 명시해주어야 함(여기가 기준)

app.use("/",home);//use-> 미들 웨어를 등록해주는 메서드.(미들 웨어는 추후에 학습하기). '대충 "/(root)"경로로 들어오면 home디렉터리로 가라 라는 뜻인 것 같음'
app.listen(PORT,()=>{
    console.log('서버 가동');
});//여기서 node실행 시켜야됨