document.write(`这里讲数据类型  函数
    <br>
    <br>
`)
function log(s){
    document.write('<br>'+JSON.stringify(s));
}
/**
 * 数字123  123.122   .1231  1e3    
    字符串 "" '' ``   
    未定义undefined    
    空nulll   
    NaN   
    对象
    函数
    数组
 * 
 */

//函数定义 function 关键字 后接一个或0个变量名（函数名）  后跟一个参数表述的 圆括号块 ()  再加{}语法块

function add(a,b,c,d,e){
    return a+b;
}
// log(add(1,3));


// var 变量=function   ()  {   };

// 变量()
// //用括号把匿名函数括起来之后，可以直接调用;
// (function(){})();

// (function 我有名字啊(){})();


// add=1;
// debugger;
// log(add);

//函数本身也是对象，函数会有什么方法和属性呢；
// var sub=function(a,b){
//     return a-b;
// }
// sub.name='add';
// delete add.name;
// add.name='sub';
// log(add.name);

