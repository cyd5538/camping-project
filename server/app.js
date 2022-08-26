const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const argon2 = require('argon2');

const CampingUser = require("./Model/UserModel");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
  if(!(await argon2.verify(user[0].password,password))){
    res.json({ status: "error", error: "패스워드가 틀립니다." });
    return;
  }
  if(user.length === 0){
    res.json({ status: "error", error: "해당하는 아이디가 없습니다." });
  }
  res.json({ status: "success", success: "로그인 성공" });
});

app.listen(3001, () => {
  console.log(`server 3001`);
});
