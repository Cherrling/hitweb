// ���� express
const express = require('express')
    // ����������ʵ��
const app = express()

var bodyParser = require('body-parser');

// ���� application/x-www-form-urlencoded �������
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// ���ý��������ݵ��м��
app.use(express.urlencoded({ extended: false }))

// һ��Ҫ��·��֮ǰ������ cors ����м�����Ӷ�����ӿڿ��������
const cors = require('cors')
app.use(cors())

// -------------------------------







function test(data) {
    console.log('a');
    console.log(data);
}

app.post('/login', urlencodedParser, function(req, res) {

    // ��� JSON ��ʽ
    var response = {
        "username": req.body.username,
        "password": req.body.password
    };

    console.log(response);
    res.end(JSON.stringify(response));
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
    //��
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







// app.get('/', function(req, res) {
//     res.send('Hello World get');
//     console.log(req);
//     console.log('server get');
// })

// app.post('/', function(req, res) {
//     res.send('Hello World post');
//     console.log(req.body.data);

//     console.log('server post');
// })


app.use(express.static('../Frontend'))

app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1:3000')
})