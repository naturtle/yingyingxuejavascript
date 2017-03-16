log2(`null`);


//null的来源 并不多

//多数来源于一些方法或函数调用
var aaa=null;

log(aaa);

var body=document.body;

var v=body.getAttribute('xxxx');

log(v);



//null的作用是什么，字面是空值，代表了一个明确的，是被赋值出来的代表“空”的值，区别对待于undefined;

var o=[0,1,2];
o[2]=null;
if(o[2]===null){
    
    log('o[2]被设置空了');
}

if(o[3]===undefined){
    log('o[3]被设置空了');
}