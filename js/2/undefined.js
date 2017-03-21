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

// log2(xxx+1);
// log2(xxx+"string");
// log2(xxx+null);
// log2(xxx+{});
// log2(xxx+function(){});

// 2.对象不存在的属性，会读到undefined;
// log2({}.a);
// log2({a:1}.a);

// 3.void 语句会把后面的东西的值吃掉，换成undefined;

// log2 (void 2412451231);



//4.函数运行未提供返回值，则读取到undefined;

function func(){};
function func1(){return;};
function func2(){return undefined};


log2(func2());

//5.一些不支持的操作，可能会得到undefined;