  // 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())
app.use(express.urlencoded({extended:false}))


const joi = require('joi')

// 一定要在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
    // status 默认值为 1，表示失败的情况
    // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
    res.cc = function (err, status = 1) {
      res.send({
        status,
        message: err instanceof Error ? err.message : err,
      })
    }
    next()
  })


// 导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

//错误中间件
app.use(function(err,req,res,next){
    //数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    //未知错误
    res.cc(err)    
    next()
})

// write your code here...

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
console.log('api server running at http://127.0.0.1:80')
})