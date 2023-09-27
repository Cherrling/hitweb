// 导入 express
const express = require('express')
    // 创建服务器实例
const app = express()

var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

// -------------------------------







function test(data) {
    console.log('a');
    console.log(data);
}

app.post('/login', urlencodedParser, function(req, res) {

    // 输出 JSON 格式
    var response = {
        "username": req.body.username,
        "password": req.body.password
    };

    console.log(response);
    console.log(req.query);
    res.send(JSON.stringify(response));
})


app.post('/testsql', urlencodedParser, function(req, res) {
    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'test'
    });

    connection.connect();

    var sql = 'SELECT * FROM websites';
    //查
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n');
    });

    connection.end();
})



app.get('/api', function(req, res) {
    res.send('Hello World get');
    console.log(req);
    console.log('server get');
})

app.post('/api', function(req, res) {
    res.send('Hello World post');
    console.log(req.body.data);

    console.log('server post');
})


app.use(express.static('../Frontend'))

app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1:3000')
})