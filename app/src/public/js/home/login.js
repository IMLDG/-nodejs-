//문서에서 값(아이디,비밀번호 등)을 받아오기
//DOM(Document Object Model)사용하기

"use strict";

const id = document.querySelector("#id");//# => tag에 id로 분류되어 있는 것을 가져옴
const password = document.querySelector("#password");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);//Event의 종류 => https://m.blog.naver.com/PostView.nhn?isHttpsRedirect=true&blogId=qbxlvnf11&logNo=220877806711&categoryNo=24&proxyReferer=

function login(){
    const req = {
        id : id.value,
        password : password.value
    }

    fetch("/login",{
        method : "POST",//생성
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)//JSON 객체는 문자열로 감싸져있음. => "{ "..." : ".." }"
    }).then((res)=> res.json())
      .then((res)=> {
            if(res.success){
                location.href="/";//로그인 성공시 main 화면으로 이동
            }else{
                alert(res.msg);
            }
      })
      .catch((err) => {
          console.error(new Error("로그인 중 에러 발생"));
      });
};