const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const CampingUser = require("./Model/UserModel");
const { validUser } = require('./middlewear/auth')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 몽고디비 연결
mongoose
  .connect(process.env.Mongo_URL)
  .then(() => console.log("몽고 연결"))
  .catch((err) => console.log(err));

app.post("/api/register", async (req, res) => {
  const { name, password, email } = req.body;
  const hash = await argon2.hash(password);
  try {
    await CampingUser.create({
      name,
      email,
      password : hash
    });
    res.json({ status: "OK" });
  } catch (error) {
    res.json({ status: "error", error });
  }
});

app.post("/api/login", async (req, res) => {
  const { password, email } = req.body;
  const user = await CampingUser.find({
    email
  });
  console.log(user)
  if(!(await argon2.verify(user[0].password,password))){
    res.json({ status: "error", error: "패스워드가 틀립니다." });
    return;
  }
  if(user.length === 0){
    res.json({ status: "error", error: "해당하는 아이디가 없습니다." });
  }
  const access_token = jwt.sign({email}, "secure");
  res.cookie('access_token', access_token, {
    httpOnly: true
  })
  console.log(access_token);
  res.json({ status: "success", success: "로그인 성공" });
});

app.get('/secure-data',validUser, async (req, res) => {
  res.send('인증된 사용자만 쓸 수 있는 API');
})

app.listen(3001, () => {
  console.log(`server 3001`);
});
