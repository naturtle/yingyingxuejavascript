document.write(`这里讲数据类型  数组array
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
//数组直接量定义  [ xxx , ...  ,   xxx]
// var arr=[1,2,3];

// document.write(arr[-1]);
//使用构造器的形式创建数组
// var arr=new Array(1,2,3);

// document.write(arr);

var arr=Array(1,2,3);
// document.write(arr);


//数组的使用
// alert(arr[0]);
// document.write(arr[-1]);//游标不正确的时候会得到一个undefined;

//什么叫做游标不正确呢

//超过最大数量或者比最小（0）还要小;

//对数组增加成语，1.可以直接赋值;

// arr[3]=4;
// document.write(`arr[3]=4;\n`+arr);


// arr[5]=5;
// document.write(`\narr[5]=5;`+arr);
// document.write(arr.length);
// document.write(arr[4]);


// arr[1000]=1000;
// debugger;
// document.write(arr.length);

//数组，他也是对象
//对象就会有属性和方法
//数组会有什么方法呢
arr.push("1",{});
// debugger;
// document.write(arr);



//断点这个概念是来自调试的

//如何清掉数组的成语
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);
arr.pop();
log(arr);

