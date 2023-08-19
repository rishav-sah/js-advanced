/**
 * Code inside curly bracket is called block.
 * Block contains multiple javascript statements which are grouped inside a block.
 * 
 * 
 */
// if (true) // SyntaxError: Unexpected end of input

{
  var a = 10; // hoisted inside the global scope
  let b = 20; // hoisted inside the block scope
  const c = 30; // same as let
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
// console.log(b); // ReferenceError: b is not defined
// console.log(c);

// Shadowing in javascript

var s = 999;
let x = 11;
{
  var s = 99; // shadowed and modified the value of s = 999 because it's pointing to the same memory location
  console.log(s);
  let x = 111; // doesn't modify in case of let and const
  console.log(x);
}

console.log(s); // 9
console.log(x); // 11

// Note - shadowing behaves same in case of function.

// Shadowing in a function

var y = 2;

function shadow() {
  var y = 22; // This shadows the outer y within the function scope. Hence, doesn't modify the outer y because of function scope
  return y;
};
console.log(shadow()); // 22
console.log(y); // 2 (outer y is not affected by inner y in case )

// Illegal Shadowing - a situation where a variable in an inner scope (block) is declared using var with the same name as it is declared in an outer scope using let which throws an syntax error.

let z = 3; // declared globally
// {
//   var z = 33; // cannot re-declare as z is already present globally
//   console.log(z); // SyntaxError: Identifier 'z' has already been declared
// }