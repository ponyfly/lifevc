/**
 * Created by Administrator on 2017/7/11.
 */
import data from './data.json'
import Mock from 'mockjs'

Mock.mock('/mock/goods',{
  code:0,
  data:data.goods
})