
var fs = require("fs");
//path模块，可以生产相对和绝对路径
var path = require("path");
//获取后缀名
function getFileExt(url) {
    var arr = url.split('.');
    var len = arr.length;
    return arr[len - 1];
}

// //获取当前目录绝对路径，这里resolve()不传入参数
//读取文件目录
function readDir(filePath, fileExt, fn) {
    var files = fs.readdirSync(filePath);
    var count = files.length;
    var results = {};

    files.forEach(function (filename) {
        //filePath+"/"+filename不能用/直接连接，Unix系统是”/“，Windows系统是”\“
        var stats = fs.statSync(path.join(filePath, filename));

        //文件
        if (fileExt === "**") {
            if (!stats.isFile()) {
                fn(filename, filePath);
            }
        } else {
            if (stats.isFile()) {
                if (fileExt === '*' || getFileExt(filename) === fileExt) {
                    fn(filename, filePath);
                }
            }
        }

    });
}
exports.default = readDir;