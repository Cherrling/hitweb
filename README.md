# hitweb

## index.html
主界面

## login.html

登录和注册用界面

## admin.html

管理员用界面，可以删除文章，只有管理员有权限访问

## upload.html

上传文章界面，只有登录后才能访问

## api.js

主要路由模块，处理后端各种操作


---
针对上传文章和删除文章做了权限检查，使用session保存用户登陆状态。
针对用户注册和登录操作有字符检查，防止用户名和密码不合规

---
### 注册用户部分
* 使用`joi`配合检查输入合法性，joi检查输入格式和长度，函数中见检查是否为空
* 匹配输入的用户名
	* 匹配成功，提示用户已存在
	* 不成功，正常注册，反馈到数据库

```js
router.post('/reguser', expressJoi(reg_login_schema), (req, res) => {

    //接收表单数据，数据在POST发送数据包的body体中
    const userinfo = req.body
    //判断输入信息是否为空
    if (!userinfo.username || !userinfo.password) {
        return res.send({status:1,msg:'user or password illegal'})
    }

    const sqlStr = `select * from user where username=?`
    //执行SQL语句，并根据结果判断用户名是否被占用

    db.query(sqlStr, [userinfo.username], (err, results) => {
        console.log('select ---', results.length)
        //查询出错，返回错误信息
        if (err) {
            return res.send({status:1, msg:err.message})
            // return res.cc(err.message)
        }
        //用户名被占用
        if (results.length > 0) {
            // return res.cc('用户名已注册')
            return res.send({status:1,msg:'用户名已注册'})
        }
        //用户名可用，可用注册
        //对用户的密码，进行单向加密处理，返回值是加密后的密码字符串
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        const sql1 = 'insert into user set ?'
        db.query(sql1, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            if (err) {
                // return res.cc(err.message)
                return res.send({status:1,msg:err.message})
            }
            if (results.affectedRows !== 1) {
                // return res.cc('注册用户失败')
                return res.send({status:1,msg:'注册用户失败'})
            }
            // return res.cc(0, '注册成功')
            return res.send({status:0,msg:'注册用户成功'})
        })

    })
})

```

### 登录
* 与注册模块相同，使用`joi`配合检查输入合法性，joi检查输入格式和长度，函数中见检查是否为空
* 匹配输入的用户名
	* 匹配成功，对比密码，使用`bcrypt`内置的`console.log(results)`方法
	* 不成功，返回登陆失败

```js
//登录
router.post('/login', (req, res) => {

    console.log('get login request')
    // const sqlStr = `select password from user where username=?`
    const sqlStr = `SELECT * FROM user WHERE username=?`
    //执行SQL语句，并根据结果判断用户名是否被占用

    const userinfo = req.body
    db.query(sqlStr, [userinfo.username], (err, results) => {
        console.log('select --------', results.length)
        //查询出错，返回错误信息
        if (err) {
            //return res.send({status:1, msg:err.message})
            return res.cc(err.message)
        }
        //该用户名有多个
        if (results.length > 1) {
            //console.log('88888888888888')
            console.log("mu user");
            return res.cc('用户名多个，错误')

        }
        if (results.length == 0) {
            //console.log('88888888888888')
            console.log("no user");

            return res.cc('没有该用户')
        }
        //对前端输入的用户密码，和数据库中保存的加密密码比较，是库中保存的返回true，否则返回false
        //bcrypt.compareSync (userinfo.password, hashFromDB);
        console.log(userinfo.password);
        console.log(results[0].password);
        let compareResult = bcrypt.compareSync(userinfo.password, results[0].password);
        console.log(compareResult);
        if (compareResult == true) {
            req.session.user = results[0] // 用户的信息
            req.session.islogin = true // 用户的登录状态
            req.session.op = results[0].op // 用户的op状态
            console.log(results);
            return res.send({
                status: 0,
                msg: '登录成功',
            })

        }
        else {
            return res.cc('密码错误，不能登录')
        }

    })
})
```

### 验证服务器用户名
```js

router.post('/username', (req, res) => {
    if (!req.session.islogin) {
        console.log('session 0');
        return res.send({ status: 1, msg: 'fail' })
        // return res.cc(1,'fail')
    }
    console.log('session 1');
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username,
        op: req.session.op
    })
})

```

### 登出
```js
router.post('/logout', function (req, res) {
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功',
    })

})
```
### 获取文章接口

主要用于获取数据库内文章，打印在前端
```js
router.post('/getarticle', (req, res) => {
    const sqlStr = `SELECT * FROM article ORDER BY article.timestamp DESC`
    const userinfo = req.body
    db.query(sqlStr, (err, results) => {
        console.log('select --------', results.length)
        //查询出错，返回错误信息
        if (err) {
            //return res.send({status:1, msg:err.message})
            return res.cc(err.message)
        }
        //该用户名有多个
        if (results.length > 0) {
            res.send({
                status: 0,
                msg: 'success',
                article: results
            })
        } else {
            res.send({
                status: 1,
                msg: 'fail'
            })
        }
    })
})
```

### 上传文章接口

```js
router.post('/upload', (req, res) => {

    const userinfo = req.body
    const sqlStr = "INSERT INTO `article`( `author`, `content`) VALUES ('" + req.session.user.username + "','" + userinfo.content + "')"
    db.query(sqlStr, (err, results) => {
        console.log('select --------', results.length)
        //查询出错，返回错误信息

        res.send({
            status: 0,
            msg: 'success',
            article: results
        })

    })
})

```
### 更新文章状态接口

更新文章状态，主要用于文章的删除和恢复

```js
router.post('/updatearticle', (req, res) => {
    const userinfo = req.body
    const sqlStr = 'UPDATE article  SET  `show`  = ' + userinfo.show + ' WHERE  `ID`  = ' + userinfo.ID
    if (userinfo.username == req.session.user.username && req.session.op >= 3) {
        db.query(sqlStr, (err, results) => {
            //查询出错，返回错误信息
            if (err) {
                //return res.send({status:1, msg:err.message})
                return res.cc(err.message)
            }
            res.send({
                status: 0,
                msg: 'success',
                article: results
            })
        })
    } else {
        console.log("del fail");
        res.send({
            status: 1,
            msg: 'fail'
        })
    }
})```