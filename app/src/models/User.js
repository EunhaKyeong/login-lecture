"use strict";

const { use } = require("../routes/home");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const { id, pwd } = UserStorage.getUserInfo(this.body.id);
        console.log({ id, pwd });

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
}

module.exports = User;