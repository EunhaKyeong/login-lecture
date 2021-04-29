"use strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김개발"],
        pwd: ["1234", "1234", "123456"], 
        name: ["우리밋", "나과장", "김과장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const userinfo = {};
        const idx = this.#users.id.indexOf(id);
        if (idx!==-1) {
            userinfo.id = id;
            userinfo.pwd = this.#users.pwd[idx];
        }
        return userinfo;
    }

    static registerUser(userInfo) {
        this.#users.id.push(userInfo.id);
        this.#users.pwd.push(userInfo.pwd);
        this.#users.name.push(userInfo.name);
        console.log(this.#users);

        return true;
    }
}

module.exports = UserStorage;