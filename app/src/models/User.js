"use strict";

const { response } = require('express');
const UserStorage = require('./UserStorage');

class User {
    constructor(body){
        this.body = body
    }

    async login() {
        const client = this.body;
        const {id, password} = await UserStorage.getUserInfo(client.id);
        
        if(id){
            if(id == client.id && password == client.password){
                return {success : true};
            }
            return {success : false, msg : "비밀번호가 일치하지 않습니다."}
        }
        return {success : false, msg : "존재하는 아이디가 없습니다."}
    }
    async register() {
        const client = this.body;
        try{
        const response = await UserStorage.save(client);
        return response;
        }catch(err){
            const a = {success : false, msg: err};
            return a;
        }
    }
}

module.exports = User;