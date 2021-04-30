"use strict";

const id = document.querySelector("#id"), 
    pwd = document.querySelector("#pwd"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        "id": id.value,
        "pwd": pwd.value
    };
    if (!req.id) {
        return alert("아이디를 입력해주세요!");
    } else if (!req.pwd) {
        return alert("비밀번호를 입력해주세요!");
    }
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    }).then((res)=>res.json()).then((res)=>{
        if (res.success) {
            location.href="/"
        } else {
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error(new Error("로그인 중 에러 발생"));
    });
}