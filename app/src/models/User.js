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

    register() {
        const result = UserStorage.registerUser(this.body);

        if (result) {
            return { success: true };
        } else {
            return { success: false, msg: "회원가입 중 문제가 발생했습니다." };
        }
    }
}

module.exports = User;