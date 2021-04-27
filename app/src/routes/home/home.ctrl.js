"use strict";

const home = (req, res)=>{
    //기능
    res.render("home/index");
};

const login = (req, res)=>{
    res.render("home/login");
};

module.exports = {
    home, //이것은 hello: hello, 와 같은 의미(key만 입력하면 value는 key와 동일한 값.)
    login,
};