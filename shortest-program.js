/**
 * Yes, The empty file with no code written can be the shortest javascript program.
 * When the program is executed, a global execution context is created and it sets up the memory space which is present in the window object
 */

console.log(window); // A global object created along with the global execution context which is a default behavior of js engine in case of browsers only which can also be accessed by this keyword.
console.log(window === this); // true in global level

// Global Space can be referred as any code written in javascript which is not inside a function. For example,

var a = 10; // In global space

function b() {
  var x = 20; // variable not in global space but the function in inside global space.
}
