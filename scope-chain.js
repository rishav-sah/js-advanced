/**
 * A lexical environment is a data structure that holds variable and function declarations and associates them with the scope in which they were defined. It consists of two main components:
  a. Environment Record: This is where the actual variable and function declarations are stored. It acts as a kind of container for the identifiers (variable names, function names) and their corresponding values.
  b. Outer Environment: This refers to the lexical environment in which the current environment is nested. In other words, it points to the lexical environment where the current code is physically located (like a parent scope).

  In other words, Lexical Environment = Execution Context's local memory + Reference to lexical environment of its parent.

 * The scope chain is a concept closely tied to lexical environments. It represents the hierarchical structure of lexical environments that are nested within each other. It is formed by linking the outer environment reference of each lexical environment to the outer environment of its containing lexical environment. This creates a chain-like structure.
  
  When you reference a variable or a function in your code, JavaScript looks for it in the current lexical environment's environment record. If it's not found there, JavaScript then follows the scope chain by checking the outer environment, and so on, until the identifier is found or until the outermost global environment is reached.
 */

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  };
};

a();

/**
 * In the code above, then function a() is defined within the global lexical environment, when function a() is invoked, a new local lexical environment is created for the execution of the function a() and pushed in the call stack, it stores a reference to its parent lexical environment in the GEC memory (Global or Window Object).
 * When a new execution context is pushed onto the call stack, it holds a reference to the lexical environment of its parent (the execution context from which it was invoked). This reference is crucial for establishing the scope chain and enabling proper variable and function access and resolution. This mechanism allows functions to maintain access to variables and functions in their containing or parent environments, even after the parent function has finished executing and its local variables might have been cleared from memory. The scope chain ensures that variables are looked up in the correct sequence as the execution context progresses up the call stack. In JavaScript, this reference to the parent lexical environment is implemented through the internal structure of the environment and is essential for maintaining the correct scoping behavior across nested functions and blocks of code.
 * GEC holds reference to null
 * JS engine first looks for the variable or function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed. The mechanism is known as scope chain.
 * If the variable accessed is not found in the scope chain then we will get ReferenceError:  Not Defined in the console.
 */