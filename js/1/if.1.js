
//变量  variable->var  符合规则的变量名
//  必须要有一个字母或$,_开头;    
var     a1234=4;
var    _1233=1;
var   $=2;
var $$$=1;
var isTrue=($$$+$)*_1233/a1234;
// if       (     isTrue*10>2     ){
//     // alert(isTrue);
// }else{
//     // alert("else 分支");
// }
// if 语法  定义  就是 if(表达式)执行语句(支持语法块)

//  没带语法块的
// if(isTrue*10>2) alert(isTrue);
// else            alert(1);

//  这是带语法块的
if(false) {alert(isTrue);}
else            {alert(1);alert(2);/*可以写很多句，当成一个语法块*/}

