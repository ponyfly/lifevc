/**
 * Created by Administrator on 2017/7/17.
 */
const data = require('../src/mock/life.json')
const smsUtil = require('../util/sms_util')

const users = [
  {id:1,phone:'18234780569',password:'zzczzc2017'}
]

let codes = {}
//返回首页信息
function getLifeInfo(req, res, next){
  res.set("Access-Control-Allow-Origin", "*")
  res.json(data.lifeInfo)
}
//返回产品列表
function getGoods(req, res, next){
  res.set("Access-Control-Allow-Origin", "*")
  res.json(data.goods)
}
//发送验证码
function sendCode(req, res, next) {
  let phone = req.query.phone
  let code = smsUtil.randomCode(6)
  smsUtil.sendCode(phone, code, (success)=>{
    if(success){
      codes[phone] = code
    }
  })
}
//注册
function register(req, res, next) {
  console.log(req);
  let phone = req.body.phone
  let code = req.body.code
  let password = req.body.password
  if(!phone){
    res.send({code:1})
  }else{
    let user = users.find(user=>user.phone == phone)
    if(user){
      res.send({code:1})
    }else{
      if(!codes[phone] || !codes[phone] == code){
        res.send({code:1})
      }else{
        users[users.length] = {
          id:users.length,
          phone:phone,
          password:password
        }
        delete codes[phone]
        res.send({code:0})
      }
    }
  }
}
//登陆
function login(req, res, next) {
  console.log(req);
  let phone = req.body.phone
  let password = req.body.password
  let user = users.find(user=>user.phone == phone)
  if(!user){
    res.send({code:1})
  }else{
    if(user.password == password){
      res.send({
        code:0,
        username:user.phone
      })
    }else{
      res.send({code:1})
    }
  }
}

module.exports = {
  getLifeInfo,
  getGoods,
  sendCode,
  register,
  login
}