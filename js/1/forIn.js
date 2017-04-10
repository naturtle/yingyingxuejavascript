log3(`
    for  循环语句
    支持2个子语句  
        continue 跳过本次循环  
        break   退出循环
    
    for ( [var]  变量名  in  表达式  ) {}  遍历语法
    会遍历出厡型链上可以枚举的所有属性；
`)



for(var index in arr){
    log2("index的值为："+JSON.stringify(index)
    +"， arr[index]的值为"+JSON.stringify(arr[index]));
}
debugger;
// function 对象构造函数(){};
// 对象构造函数.prototype.c=function(){}
// var obj=new 对象构造函数;
// obj.b=2;
// obj.a=1;
// for(var name in obj){
//     debugger;
//     log2("name的值为："+JSON.stringify(name)
//     +"， obj[name]的值为"+JSON.stringify(obj[name]));
// }



