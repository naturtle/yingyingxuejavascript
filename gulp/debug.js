var express = require('express');
var app = express();
// var bodyParser = require("body-parser");
var fs=require('fs');
var readDir=require('./readdir.js').default;
// app.use(bodyParser.urlencoded({extended: true}))

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
});
app.get('/', function (req, res) {
    var data=fs.readFileSync('./index.html').toString();
    var config={};
    readDir('./js','**',function(file,path){
        var pathConfig=JSON.parse(fs.readFileSync(path+'/'+file+'/config.json').toString());
        var files=[];
        config[file]={
            config:pathConfig,
            files:files
        };
        readDir(path+'/'+file,'js',function(file,path){
            files.push(file);
        });
    });
    data=data.replace('$$config$$',JSON.stringify(config));
    res.send(data);
});
app.get('/js/**/*.js',function(req, res){
    res.send('<html><header><script>'+fs.readFileSync('./'+req.url)+'</script></header></html>');
})
console.log('http://localhost:3000/');