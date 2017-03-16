document.write(`这里讲数据类型  未定义undefined
    
`)
/**
 *  数字123  123.122   .1231  1e3    
    字符串 "" '' ``   
    未定义undefined    
    空nulll   
    NaN   
    对象
    函数
    数组
 * 
 */
//1.变量未定义会有默认值undefined
var xxx;

// alert(xxx+1);
// alert(xxx+"string");
// alert(xxx+null);
// alert(xxx+{});
// alert(xxx+function(){});

// 2.对象不存在的属性，会读到undefined;
// alert({}.a);
// alert({a:1}.a);

// 3.void 语句会把后面的东西的值吃掉，换成undefined;

// alert (void 2412451231);



//4.函数运行未提供返回值，则读取到undefined;

function func(){};
function func1(){return;};
function func2(){return undefined};


alert(func2());

//5.一些不支持的操作，可能会得到undefined;