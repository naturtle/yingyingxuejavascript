/**
 * appendLine JSON.stringify
 * 
 * @param {*} s 
 */
function log(s:any){
    document.write('<br>'+JSON.stringify(s));
}

/**
 * appendLine
 * 
 * @param {*} s 
 */
function log2(s:any){
    document.write('<br>'+s);
}
var re=/\\n/g;

/**
 * \n to <br>
 * 
 * @param {string} s 
 */
function log3(s:string){
    document.write('<br>'+s.replace(re,'<br>'));
}
/**
 * <pre>...</pre>
 * 
 * @param {*} s 
 */
function log4(s:any){
    document.write('<pre>'+s+'</pre>');
}