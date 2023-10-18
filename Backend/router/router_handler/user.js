/*在这里定义和用户相关的路由处理函数，供/router/user.js模块进行调用
*/

//导入数据库操作模块
const db = require('../../db/index')

const bcrypt=require('bcryptjs')

//注册用户的处理函数
exports.regUser=(req,res)=>{

    //接收表单数据，数据在POST发送数据包的body体中
        const userinfo=req.body
        //判断输入信息是否为空
        if (!userinfo.username || !userinfo.password) {
                return res.send('user or password illegal')
        }

        const sqlStr =`select * from user where username=?`
        //执行SQL语句，并根据结果判断用户名是否被占用

        db.query(sqlStr,[userinfo.username], (err,results)=>{
            console.log('select ---', results.length)
           //查询出错，返回错误信息
            if (err) {            
                //return res.send({status:1, msg:err.message})
                return res.cc(err.message)
            }
            //用户名被占用
            if (results.length >0) {
                //console.log('88888888888888')
                return res.cc('用户名已注册')
                //return res.send({status:1,msg:'用户名已注册'})
            }
            //用户名可用，可用注册
            //对用户的密码，进行单向加密处理，返回值是加密后的密码字符串
            userinfo.password = bcrypt.hashSync(userinfo.password,10)
            const sql1='insert into user set ?'
            db.query(sql1, {username:userinfo.username,password:userinfo.password},(err,results)=>{
                if (err) {
                    return res.cc(err.message)
                   //return res.send({status:1,msg:err.message})
                }
                if (results.affectedRows !==1) {
                    return res.cc('注册用户失败')
                  //return res.send({status:1,msg:'注册用户失败'})
                }
                return res.cc(0,'注册成功')
                //return res.send({status:0,msg:'注册用户成功'})
            })
    
         })

        // db.query(sqlStr,[userinfo.username], (err,results)=>{
        //     console.log('select ---', results.length)
        //    //查询出错，返回错误信息
        //     if (err) {            
        //         return res.send({status:1, msg:err.message})
        //     }
        //     //用户名被占用
        //     if (results.length >0) {
        //         console.log('88888888888888')
        //         //return res.cc('用户名已注册')
        //         return res.send({status:1,msg:'用户名已注册'})
        //     }
        //  //可注册，添加到数据库中
        //  //对用户的密码,进行bcrype加密，返回值是加密之后的密码字符串
        //  userinfo.password=bcrypt.hashSync(userinfo.password,10)
        //  console.log(userinfo.password)

        //  //定义插入用户的SQL语句
        //  const sql1='insert into ev_users set ?'
        //  db.query(sql1, {username:userinfo.username,password:userinfo.password},(err,results)=>{
        //     if (err) {
        //         return res.send({status:1,msg:err.message})
        //     }
        //     if (results.affectedRows !==1) {
        //       return res.send({status:1,msg:'注册用户失败'})
        //     }            
        //     return res.send({status:0,msg:'注册用户成功'})
        //  })
    
        // })

     //res.send('111 reguser OK')
    }

//登录的处理函数
exports.login=(req,res)=>{
    res.send('111 login OK')
}