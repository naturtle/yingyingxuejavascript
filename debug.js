var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
// 网站首页接受 POST 请求
app.post('/console', function (req, res) {
    console.log(req.body);
    res.send('');
});
