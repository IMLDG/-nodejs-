"use strict";

const User = require('../../models/User');

const output = {
    main : (req,res) => {
        res.render("home/main");//app.set으로 views의 경로를 미리 설정해두었기 때문에 render에서는 경로설정에서 ./views 제외
    },
    login : (req,res)=>{
        res.render("home/login");
    },
    register : (req,res)=>{
        res.render("home/register");
    }
}

const process = {
    login : async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register : async (req,res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    }
};

module.exports={
    output,
    process
};//key만 입력을 하면 자체적으로 key와 같은 value를 넣어줌