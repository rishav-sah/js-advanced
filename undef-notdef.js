/** Undefined vs Not Defined

 * Before the execution of the code below, the javascript have allocated memory to variable a which is a placeholder in the memory which is represented by a special keyword known as undefined.
 * JavaScript is a loosely typed language, or weakly typed. It doesn't attach variables to any specific data type.
 */

console.log(a); // undefined
var a = 7;
console.log(x); // ReferenceError: x is not defined

// Let us see another example:

var b;
console.log(b); // undefined
b = 10;
console.log(b); // 10
b = "undefined vs not defined";
console.log(b); // undefined vs not defined





