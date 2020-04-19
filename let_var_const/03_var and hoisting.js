
// Hoisting means to accessing the variable before its declaration.

// Eg 1.

console.log(pid);

var pid = 12345;

// OUTPUT : undefined

// Eg 2.

pid= 12345;
console.log(pid);   // 12345
var pid = 54321;
console.log(pid);   // 54321

// The above 2 examples shows how hoisting works.

// LET keyword avoids the hoisting problem!

pid = 12345;
console.log(pid);   // ReferenceError: pid is not defined
let pid= 54321;

// So it is preferred to use LET or CONST over VAR to avoid the problem of hoisting.

// Functions can also be hoisted.

runMeFirst();   // Function Hoisted!

function runMeFirst(){
    console.log("Function Hoisted!");
}

// Hoisting in function may be fine but with variable it may cause a problem.




