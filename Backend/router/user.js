const express = require('express')
//创建路由对象
const router = express.Router()

//导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
//导入需要的验证规则对象
const { reg_login_schema} = require('../schema/user')

//导入用户路由处理函数模块
const userHandler=require('./router_handler/user')//注册新用户

//router.post('/reguser',userHandler.regUser)
router.post('/reguser',expressJoi(reg_login_schema),userHandler.regUser)


//登录
router.post('/login',userHandler.login)


// //注册新用户 路由
//  router.post('/reguser',(req,res)=>{
//      console.log('get request')
//      res.send('reguser ok')
//  })

// //登录 路由
// router.post('/login',(req,res)=>{
//  res.send('login OK')
// })

//将路由对象共享出去
module.exports=router