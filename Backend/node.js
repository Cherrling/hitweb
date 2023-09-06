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


function test(data) {
    console.log('a');
    console.log(data);
}


app.post('/process_post', urlencodedParser, function(req, res) {

    // ��� JSON ��ʽ
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