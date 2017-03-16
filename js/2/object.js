document.write(`这里讲数据类型  对象Object;
    
`)
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

//声明对象变量的几种方式；
//1.{} 直接量;

// var a={};
// alert(a.toString());
//1.{} 直接量的格式为    { 属性名 :  表达式   ,    属性名2  :   表达式   ....   };
//属性名的写法支持带引号和不带引号2种写法
//调用这种属性可以用  对象['属性名']来调用
// var yigebianliang={a:1*1*1+1};
// var yigebianliang={"1asdvcasln32rd21p43ejci3y12u epi21ufdjqcncwebac quo21....":1*1*1+1};



// alert(yigebianliang["asdvcasln32rd21p43ejci3y12u epi21ufdjqcncwebac quo21...."]);


// var  o=new Object(    );
// o.a=1;
// o.toString=function(){return "我不是object Object"};
// alert(o.toString());


var  o=Object.create(null);
log(o);

// alert(o.toString());

// var o=Object();
// log(o);