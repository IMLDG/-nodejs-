"use strict";

class UserStorage{
    //# => private한 변수를 의미
     static #users = {
        id : ["woorimIT", "김팀장", "나팀장"],
        password : ["1234", "1234", "123456"],
        name : ["우리밋", "김씨", "나씨"]
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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);// => [id, password, . . ., ]
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info]=users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo){
        const user = this.#users;
        user.id.push(userInfo.id);
        user.password.push(userInfo.password);
        user.name.push(userInfo.name);
        return { success : true };
    }
}

module.exports = UserStorage;