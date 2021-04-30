"use strict";

const { use } = require("../routes/home");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const { id, pwd } = await UserStorage.getUserInfo(this.body.id);

        if (id) {
            if (this.body.pwd===pwd) {
                return { success: true };
            }
            else {
                return { success: false, msg: "비밀번호가 틀렸습니다."};
            }
        } else {
            return { success: false, msg: "아이디가 존재하지 않습니다."};
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
                return { success: false, msg: err };
            }
            
        }
    }
}

module.exports = User;