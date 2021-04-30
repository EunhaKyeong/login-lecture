"use strict";
const mysql = require('../config/db');

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject)=>{
            mysql.query(`SELECT id, pwd FROM users WHERE id=?;`, id, (err, data)=>{
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async registerUser(userInfo) {
        console.log(userInfo);
        return new Promise((resolve, reject)=>{
            mysql.query(`INSERT INTO users(id, pwd, name) VALUES (?, ?, ?);`, 
                [userInfo.id, userInfo.pwd, userInfo.name], 
                (err)=>{
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                })
        });
    }
}

module.exports = UserStorage;