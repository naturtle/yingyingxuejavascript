﻿
var gulp = require('gulp');
gulp.task('default',function(){
	console.log(`
gulp web   启动express网站
	`);
});
var child_process=require('child_process');
var exec = child_process.exec;
function node(nodePath,cb){
	var tsc=exec('node '+nodePath, [],cb);
	console.log(nodePath + '>\n'+'启动'); 
	tsc.stdout.on('data', function (data) { 
		console.log(nodePath + '>\n'+data); 
	}); 
	tsc.stderr.on('data', function (data) { 
		console.log(nodePath + '>error:\n'+ data); 
	}); 
	tsc.on('exit', function (code, signal) {
	});
}

gulp.task('web',function(){
	node('gulp/web');
});