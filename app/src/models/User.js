"use strict";

const { use } = require("../routes/home");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        try {
            const userInfo = await UserStorage.getUserInfo(this.body.id);
            if (userInfo) {
                if (userInfo.pwd===this.body.pwd) {
                    return { success: true };
                } else {
                    return { success: false, msg: "비밀번호가 틀렸습니다." };
                }
            } else {
                return { success: false, msg: "존재하지 않는 아이디입니다." };
            }    
        } catch(err) {
            return { success: false, err};
        }
    }

    async register() {
        const check = await UserStorage.getUserInfo(this.body.id);
        if (check) {
            return { success: false, msg: "이미 존재하는 아이디입니다." };
        } else {
            try {
                return await UserStorage.registerUser(this.body);
            } catch(err) {
                return { success: false, err };
            }
            
        }
    }
}

module.exports = User;