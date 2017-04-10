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
    日期
 * 
 */

//es6  ecmascript6 还有一种定义函数方式  lambda
//function   ()  { return   }
//           ( a ,b ,c)=>{ return   }
//           a => {         }
//           (a,b) => a+3
//           a => a+3
var result=((a,b)=>{return a+b })(1,3);
log(result);


var result2=(  a => a+3   )(1);
log(result2);

//lambda  绑定this  后面再讲