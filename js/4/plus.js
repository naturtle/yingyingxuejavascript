log2('+');


//算数相加，从左往右运算，

//类型不一致的2个类型相加，会转类型为兼容类型，倾向于转成字符串
log("1"+1);

//代表一个数的正负情况
log(-1);
log(+1);

//类似这种令人疑惑的式子
log(1  + - + - + + + + + 1);
//其实是描述很多层带符号的数字
log(1 + (-( + (- (+ (+ (+ (+ (+ 1)))))))));

