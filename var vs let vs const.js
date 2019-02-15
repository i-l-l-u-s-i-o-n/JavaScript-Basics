
// let declared outside the function doesn't create global variable.
// It also doesn't attach the declared variable to "window" object.
let count=10;
// let has block level scope
for(let count = 5; count<15;count++){
    console.log(count);
}
console.log(count);


// Output
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 10    -> The value didn't change as after returning from the for loop the , count declared in for body is destroyed.



// The variable declared with var keyword, makes it GLOBAL.
// It also attach it to the "window" object.
// We can now access the variable declare with var in the console by typing -> window.<variable_name>

var count1=10;
// The scope of var is not limited to the block, it is visible to whole function.
for(var count1 = 5; count1<15;count1++){
    console.log(count1);
}
console.log(count1);

//OUTPUT
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15       -> The value has changed from 10 to 15. 



// const doesn't become the property of window object.
// A variable value must be specified at the time of declaration and it can't be changed.
// It has a block level scope.

const count2=10;

for(const count2=5;count2<15; count2++){ 
    console.log(count2);
}
console.log(count2);

// OUTPUT

// 5 
// TypeError : Assignment to constant variable.

// The error occurs after printing count2 value 1 time , at the time of incrementing the value of count2 i.e "count2++"".
// We are trying to reassign the value of count2=count2+1 , which is not allowed for constatnt.
// const count2=5; in the for body is perfectly fine.