document.write(`这里讲数据类型  原型prototype
    <br>
    <br>
`)
function log(s){
    document.write('<br>'+JSON.stringify(s));
}
//一个函数会带有一个prototype属性，这个属性是一个对象

function add(){}


log(add.prototype);
//当函数被new的时候 ，他就相当于一个构造器  ，他的行为以原型(prototype)为模版
add.prototype.money=999999999999;

var addIntance=new add();

log(addIntance.money);

add.prototype.pay=function(money){
    this.money=this.money-money;
}
addIntance.pay(11111111);
log(addIntance.money);