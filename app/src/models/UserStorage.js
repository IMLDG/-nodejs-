"use strict";

class UserStorage{
    //# => private한 변수를 의미
     static #users = {
        id : ["woorimIT", "김팀장", "나팀장"],
        password : ["1234", "1234", "123456"]
    };
    
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;