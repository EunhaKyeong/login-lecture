"use strict";

const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
    home: (req, res)=>{
        logger.info(`GET / 200 "메인 페이지로 이동"`);
        //기능
        res.render("home/index");
    },
    login: (req, res)=>{
        logger.info(`GET /login 200 "로그인 페이지로 이동"`);
        res.render("home/login");
    }, 
    register: (req, res)=>{
        logger.info(`GET /register 200 "회원가입 페이지로 이동"`);
        res.render("home/register");
    }
};

const process = {
    login: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.login();
        if (response.err) {
            logger.error(`POST /login 200 Response: "success: ${response.success}, err: ${response.err}"`);
        } else {
            logger.info(`POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`);
        }

        return res.json(response);
    },
    register: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.register();
        if (response.err) {
            logger.error(`POST /register 200 Response: "success: ${response.success}, err: ${response.err}"`);
        } else {
            logger.info(`POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`);
        }

        return res.json(response);
    }
};

module.exports = {
    output,
    process
};