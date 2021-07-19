"use strict";

const user = {
    id : ["woorimIT", "김팀장", "나팀장"],
    password : ["1234", "1234", "123456"]
}

const output = {
    main : (req,res) => {
        res.render("home/main");//app.set으로 views의 경로를 미리 설정해두었기 때문에 render에서는 경로설정에서 ./views 제외
    },
    login : (req,res)=>{
        res.render("home/login");
    }
}

const process = {
    login : (req,res) => {
        const id = req.body.id;
        const password = req.body.password;

        if(user.id.includes(id)){
            const idx = user.id.indexOf(id);
            if(user.password[idx] == password){
                return res.json({
                    success : true,
                    msg : "로그인 성공"
                });
            }
        }
        return res.json({
        success : false,
        msg : "로그인에 실패하셨습니다.",
        });
    }
};

module.exports={
    output,
    process
};//key만 입력을 하면 자체적으로 key와 같은 value를 넣어줌