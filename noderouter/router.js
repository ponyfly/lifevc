/**
 * Created by Administrator on 2017/7/17.
 */
const express = require('express')
const router = express.Router()
const logic = require('./logic');

//获取网站信息
router.get('/life/webinfos',logic.getLifeInfo)
//获取商品列表
router.get('/life/goods',logic.getGoods)
//发送验证码
router.get('/sendcode',logic.sendCode)
//注册
router.post('/register',logic.register)
//登陆
router.post('/login',logic.login)

module.exports = router