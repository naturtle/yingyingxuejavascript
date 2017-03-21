log3(`
&& ||   逻辑运算
&&  逻辑与    and   
    如果左右都为真，返回右边的值
    如果左右不都为真，返回第一个不为真的值（左边）
    如果左右其中一个为真，返回假的那个值

||  逻辑或    or    
    如果左右都为真，返回左边的值
    如果左右不都为真，返回最后一个不为真的值（右边）
    如果左右其中一个为真，返回真的那个值
`);

log3(`
    true  && false = ${true&&false}
    true  && true  = ${true&&true}
    false && false = ${false&&false}
    true  || true  = ${true||true}
    true  || false = ${true||false}
    false || false = ${false||false}

    1  && 1  = ${1&&1}
    1  || 1  = ${1||1}

    "1"  && 1  = ${"1"&&1}
    "1"  || 1  = ${"1"||1}

    "a"  && 1  = ${"a"&&1}
    "a"  || 1  = ${"a"||1}
`);