var express = require('express');
var app = express();
// var bodyParser = require("body-parser");
var fs=require('fs');
var path=require('path');
var readDir=require('./readdir.js').default;
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.static( './node_modules/jquery/dist'));
var server = app.listen(3000, function () {
    // var host = server.address().address;
    // var port = server.address().port;
});
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../dom')));
app.get('/', function (req, res) {
    res.sendFile(path.resolve('index.html'));
});
app.get('/index.js', function (req, res) {
    var data=fs.readFileSync('index.js').toString();
    var config={js:{},dom:{}};
    readDir('./js','**',function(file,path){
        var pathConfig=JSON.parse(fs.readFileSync(path+'/'+file+'/config.json').toString());
        var files=[];
        config.js[file]={
            config:pathConfig,
            files:files
        };
        readDir(path+'/'+file,'js',function(file,path){
            files.push(file);
        });
    });
    readDir('./dom','**',function(file,path){
        var pathConfig=JSON.parse(fs.readFileSync(path+'/'+file+'/config.json').toString());
        var files=[];
        config.dom[file]={
            config:pathConfig,
            files:files
        };
        readDir(path+'/'+file,'html',function(file,path){
            files.push(file);
        });
    });
    data=data.replace('$$config$$',JSON.stringify(config));
    res.send(data);
});

console.log('点击此链接打开网站 http://localhost:3000/');