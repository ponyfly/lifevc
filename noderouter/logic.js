/**
 * Created by Administrator on 2017/7/17.
 */
const data = require('../src/mock/life.json')
//返回首页信息
function getLifeInfo(req,res,next){
  res.set("Access-Control-Allow-Origin", "*")
  res.json(data.lifeInfo)
}
//返回产品列表
function getgoods(req,res,next){
  res.set("Access-Control-Allow-Origin", "*")
  res.json(data.goods)
}

module.exports = {
  getLifeInfo,
  getgoods
}