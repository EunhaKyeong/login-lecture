"use strict";
const fs = require('fs').promises;

class UserStorage {
    static getUsers(isAll, ...fields) {
        return fs.readFile('./src/databases/users.json')
            .then((data)=>{
                const users = JSON.parse(data);
                if (isAll) return users;

                const newUsers = fields.reduce((newUsers, field)=>{
                    if (users.hasOwnProperty(field)) {
                        newUsers[field] = users[field];
                    }
                    return newUsers;
                }, {});
                return newUsers;
            })
            .catch(console.error);
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

    static async registerUser(userInfo) {
        const users = await this.getUsers(true);
        //데이터 추가
        if (users.id.includes(userInfo.id)) {
            return false;
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pwd.push(userInfo.pwd);
        fs.writeFile('./src/databases/users.json', JSON.stringify(users));

        return true;
    }
}

module.exports = UserStorage;