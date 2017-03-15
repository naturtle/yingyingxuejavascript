document.write(`这里讲数据类型
    
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

var str="我是一个字符串";
var str2='我也是一个字符串';
var str3=`我特么也是一个字符串`;
/**
 * 字符串支持转义符  \
 * 转义符会把后面紧接的东西转义
 * 对照表参看http://tools.jb51.net/table/javascript_escape
 */  
var str4=`1111
2222
3333
4444`;

var str5="我把后面的3个变量拼起来了："+str +"("+ str2+")"+str3;
//``字符串可以用 ${表达式} 语法把其他东西嵌到字符串里
var str6=`我把后面的3个${str+str3+str3}变量拼起${1*2*3}来了：(${str2})zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
123333333
`;
'这个是比较特殊的，后面再讲解';
document.write(str6);