// Created by Shivam Shukla.

// Arrow function was introduced in ES6 version of JS.
// It's just for consiceness.
// It is used for anonymous functions , functions that have no name.
// See following Example ->


// Without arrow ->
var twice=function(x){
    return x*2;
}
console.log(twice(4));


// Using ARROW function->

var double= x => x * 2;     // The beauty of arrow!
console.log(double(4));


// In case we pass no parameter then , ()  is must to write before arraow.

var welcome=() => "Hello There!";
console.log(welcome());


// In case of multiple arguments, (arg1,arg2,arg3,.....) , parenthesis is compulsary!

var sum= (a,b,c) => a+b+c;
console.log(sum(10,20,30));


// If we use "return", then {} are must after the arrow function.

var average= (a,b,c) => { return (a+b+c)/3};
console.log(average(20,25,30));


// Using arrow function in Higher Order function .

setTimeout(() => console.log("2 Seconds passed") , 1000);