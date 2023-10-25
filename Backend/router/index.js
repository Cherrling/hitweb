//声明文件操作系统对象
var fs = require('fs')

const express = require('express')
//创建路由对象
// const app = express()
const router = express.Router()

//    //res.writeHead(200,{'Content-Type':'text/html'})
//    fs.readFile('../../../../Form表单/01文本和单选提交.html','utf-8',(data,err)=>{
//         if (err) throw err
//         console.log(data)
//    })

router.get('/',(req,res)=>{
    console.log('get reqest')
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('../../../Form表单/01文本和单选提交.html','utf-8',function(err,data){
        console.log('get index page ok')
        console.log('data')
        
        if (err) {
            console.log(err) ;
        }
        res.end(data)
    })
})

// app.listen(80, function () {
//     console.log('api server running at http://127.0.0.1:80')
//     })
module.exports=router
   
