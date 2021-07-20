//문서에서 값(아이디,비밀번호 등)을 받아오기
//DOM(Document Object Model)사용하기

"use strict";

const id = document.querySelector("#id");//# => tag에 id로 분류되어 있는 것을 가져옴
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("button");
registerBtn.addEventListener("click", register);//Event의 종류 => https://m.blog.naver.com/PostView.nhn?isHttpsRedirect=true&blogId=qbxlvnf11&logNo=220877806711&categoryNo=24&proxyReferer=

function register(){
    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
        confirmPassword : confirmPassword.value
    }
    fetch("/register",{
        method : "POST",//생성
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)//JSON 객체는 문자열로 감싸져있음. => "{ "..." : ".." }"
    }).then((res)=> res.json())
      .then((res)=> {
            if(res.success){
                location.href="/login";//로그인 성공시 login 화면으로 이동
            }else{
                alert(res.msg);
            }
      })
      .catch((err) => {
          console.error(new Error("회원가입 중 에러 발생"));
      });
};