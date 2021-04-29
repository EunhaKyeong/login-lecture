"use strict";
const fs = require('fs').promises;

class UserStorage {
    static getUsers(...fields) {
        // const users = this.#users;

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
        return fs.readFile('./src/databases/users.json')
            .then((data)=>{
                const users = JSON.parse(data);
                const idx = users.id.indexOf(id);
                if (idx!==-1) {
                    userinfo.id = id;
                    userinfo.pwd = users.pwd[idx];
                    userinfo.name = users.name[idx];
                }
                return userinfo;
            })
            .catch(console.error);
    }

    static registerUser(userInfo) {
        // this.#users.id.push(userInfo.id);
        // this.#users.pwd.push(userInfo.pwd);
        // this.#users.name.push(userInfo.name);
        // console.log(this.#users);

        return true;
    }
}

module.exports = UserStorage;