/**
 * appendLine JSON.stringify
 *
 * @param {*} s
 */
function log(s) {
    document.write('<br>' + JSON.stringify(s));
}
/**
 * appendLine
 *
 * @param {*} s
 */
function log2(s) {
    document.write('<br>' + s);
}
var re = /\\n/g;
/**
 * \n to <br>
 *
 * @param {string} s
 */
function log3(s) {
    document.write('<br>' + s.replace(re, '<br>'));
}
/**
 * <pre>...</pre>
 *
 * @param {*} s
 */
function log4(s) {
    document.write('<pre>' + s + '</pre>');
}
