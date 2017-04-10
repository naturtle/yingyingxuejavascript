log3(`
    while  循环
    while( 表达式  ){}
    do {} while ( 表达式  )
`);
// var a="";
// while(a===""){
//     a=prompt("输入任何字符停止循环","");
// }
// log3(`a的值现在是${a}`)
// var b;
// do{
//     b=prompt("输入任何字符停止循环","");
// } while (b==="")
// log3(`b的值现在是${b}`)


log3(`for break 标签示例`);
xxx:
for(var i=0;i<10;i++){
        
    for(var j=0;j<10;j++){
        log2(i);
        break xxx;
    }

}
