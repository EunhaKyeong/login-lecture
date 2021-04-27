"use strict";

//module
const express = require('express');
const app = express();

//routing
const home = require("./src/routes/home");

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");  //html이라고 생각하면 됨.

//use -> middleware를 등록해주는 메서드
app.use("/", home);
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;