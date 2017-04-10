log3(`
    for  循环语句
    支持2个子语句  
        continue 跳过本次循环  
        break   退出循环
    for ( 初始化表达式  ; 对比表达式  ;  每次循环结束表达式 ) { 语法块}  步进语法

    1.初始化表达式
    2.对比表达式
        真  进入语法块
        假  直接结束循环
    3.每次循环结束表达式
    4.对比表达式
    ...
    对比表达式
    每次循环结束表达式
    ...
    对比表达式
        假  直接结束循环

    for ( [var]  变量名  in  表达式  ) {}  遍历语法

`)
log3(`
    for ( 初始化表达式  ;   对比表达式    ;  每次循环结束表达式 ) {语法块}  步进语法
    var arr=[1,2,3,4,5];
    var ret=1;
    for(    var i=0    ; i<arr.length   ;  i++) {
        ret*=arr[i];
    }; 
`)
var arr=[1,2,3,4,5];
for(    var i=0    ;  i<arr.length ;  i++){
    if(i===0){
        continue;
    }
    if(i>1){
        break;
    }
}; 


