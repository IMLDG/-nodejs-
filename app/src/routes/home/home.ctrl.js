"use strict";

const UserStorage = require('../../models/UserStorage');

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

        const users = UserStorage.getUsers("id","password");
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] == password){
                return res.json({
                    success : true
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