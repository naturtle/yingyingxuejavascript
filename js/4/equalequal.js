log2('==');



//==  判断相等 从左往右  得到一个boolean  true  false

// function zuo(){
//     log2('左边运行啦');
//     return 1+1;
// }
// function you(){
//     log2('右边运行啦');
//     return 3-1;
// }

// log2(zuo()==you());



//遇到类型不一样的数值的时候，他会把他们转化为兼容的类型
// log2("1"==1)
// //  把右边1变成 "1"
// //  再进行对比
// log2("[object Object]"=={});
// //对象  向字符串  转化会经过  对象.toString()的隐含调用;

// log2({}.toString());
log2("12,3"==[12,3]);
//对象  向字符串  转化会经过  对象.toString()的隐含调用;

log2([12,3].toString());

