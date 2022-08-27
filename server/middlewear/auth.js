const CampingUser = require("../Model/UserModel");

const validUser = async (req, res, next) => {
    const { access_token } = req.cookies;
    if(!access_token){
      res.status(401).send("access token이 없습니다")
    }
    // access_token에 유저이메일을 넣었으니까 이메일이 있는지 확인
    const {email} = jwt.verify(access_token, "secure")
    const userInfo = await CampingUser.find({
      email
    });
    if(!userInfo){
      res.status(401).send("유효한 access token이 아닙니다.")
    }
    next()
}