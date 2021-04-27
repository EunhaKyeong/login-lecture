"use strict";

const users = {
    id: ["woorimIT", "나개발", "rlaxlawkd"],
    pwd: ["1234", "1234", "123456"]
};

const output = {
    home: (req, res)=>{
        //기능
        res.render("home/index");
    },
    login: (req, res)=>{
        res.render("home/login");
    }
};

const process = {
    login: (req, res)=>{
        const id = req.body.id;
        const pwd = req.body.pwd;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pwd[idx]===pwd) {
                return res.json({
                    success: true, 
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패했습니다."
        });
    },
};

module.exports = {
    output,
    process
};