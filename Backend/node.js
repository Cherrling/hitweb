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


function test(data) {
    console.log('a');
    console.log(data);
}


app.post('/process_post', urlencodedParser, function(req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})



app.get('/', function(req, res) {
    res.send('Hello World get');
    console.log(req);
    console.log('server get');
})

app.post('/', function(req, res) {
    res.send('Hello World post');
    console.log(req.body.data);

    console.log('server post');
})





app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1:3000')
})