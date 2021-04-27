"use strict";

//module
const express = require('express');
const app = express();

//routing
const home = require("./routes/home");

//app setting
app.set("views", "./views");
app.set("view engine", "ejs");  //html이라고 생각하면 됨.

//use -> middleware를 등록해주는 메서드
app.use("/", home);

module.exports = app;