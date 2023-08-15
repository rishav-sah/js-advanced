/**
 * let and const declarations are hoisted to the top of their block, but they remain in the Temporal Dead Zone (TDZ) until the initialization phase is completed. Hence, they are not attached in to the global object.
 * var declarations are hoisted to the top of their global scope and attached to the global object (window).
 * Temporal Dead Zone - Time since when let & const are hoisted until the initialization phase is completed.
 */


let a = 10; // Before execution memory is allocated in different memory space, but it remain in TDZ until the value is assigned
var b = 100; // Before execution memory is allocated to b as undefined and is attached to the global object
const c = 99; // same as let but cannot be reassigned

// Let us see the errors which can take place during TDZ

// console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
let x = 9;
// let x = 20 // Uncaught SyntaxError: Identifier 'x' has already been declared (same for var & const as well)
// console.log(y); // Uncaught ReferenceError: y is not defined
// const z; // Uncaught SyntaxError: Missing initializer in const declaration
const z = 999;
// z = 20; // Uncaught TypeError: Assignment to constant variable.

// Reference Error (executes until the error arise), Syntax Error, Type Error prevents any further execution of the code. The best way to avoid error related to TDZ or any of these is to always put the declarations and initializations on the top of the scope then only logical code execution must take place.