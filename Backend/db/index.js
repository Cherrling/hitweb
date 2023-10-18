//导入mysql 模块
const mysql = require('mysql')
//创建数据库链接对象
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'11223344ww',
    database: 'db001'
})
module.exports = db