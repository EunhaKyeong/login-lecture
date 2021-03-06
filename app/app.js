"use strict";

//module
const express = require('express');
const dotenv = require("dotenv");
//const morgan = require("morgan");

const app = express();
dotenv.config();

//routing
const home = require("./src/routes/home");

//const accessLogStream = require("./src/config/log");
const logger = require("./src/config/logger");

//use -> middleware를 등록해주는 메서드
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결.
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(express.static(`${__dirname}/src/public`));
//app.use(morgan('dev'));
//app.use(morgan('common', { stream: accessLogStream }));
app.use("/", home);

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");  //html이라고 생각하면 됨.

module.exports = app;