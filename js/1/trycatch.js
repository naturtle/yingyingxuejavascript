log3(`
    try { 语句块 } catch ( 错误事件变量名 ) { 语句块 } 错误捕获
    throw 抛出一个错误;
`);

function a(){
    b();
}
function b(){
    try{
        
        c();
    }catch(e){
        throw "Bug";
    }
}
function c(){
    try{
        
        d();
    }catch(e){
        throw new Error('d出错啦，但我不告诉你是啥错了');
    }

}
function  d(){
    var obj={};
    obj.a();
}

// try{
//     a();
// }catch(e){
//     log2('错误代码：'+e);
// }

log3(`
    try catch，无法捕获到异步的错误
`)

try{
    setTimeout(function() {
        throw "错误"
    }, 2000);

}catch(e){
    alert(e);
}
