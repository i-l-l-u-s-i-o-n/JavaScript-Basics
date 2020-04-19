// by Shivam Shukla


// REST Operator(...) - It is a collection of all remaining elements (hence, the name rest, as in “the rest of the elements”) into an array.

// Eg- 

const [first , ...restOfItems]= [10,20,304,54,2342,456];

// Here we are also using Destructuring as we are breaking array into smaller pieces.

console.log(first);         // 10
console.log(restOfItems);   // [ 20, 304, 54, 2342, 456 ]

// Eg- 

const data = {
    id1 : 10,
    id2 : 101,
    fname: 'Shivam',
    lnamme: 'Shukla'
}

const { id1, id2, ...person} = data;

console.log(person);    // { fname: 'Shivam', lnamme: 'Shukla' }

// We can also use rest operator to take multiple arguments by defining a single parameter for function.
// Eg-

const add = function(...numbers){
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}

console.log(add(10,20,50,100)); // 180

//////////////////////////////////////////////////////////////////////////////////////////////////

// SPREAD Operator(...) - It’s the opposite to rest parameter , where rest parameter collects 
                    //    items into an array, the spread operator unpacks the collected elements
                    //    into single elements.


// It can be used to copy one array into another or to concatenate 2 arrays together.

const nums = [10,20,30,40,50,60,70,80];

// using rest operator
const [first, ...greaterThan10] = nums;

// using spread operator
const newArraay = [first, ...greaterThan10, 90, 100]; // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

console.log(newArraay);

// It can be used to copy one object into another or to concatenate 2 objects together.

// Concatenating 2 objects.
const person = {
    fname: 'Shivam',
    lname: 'Shukla'
}

const allDetails = {
    id1 : 10,
    id2 : 101,
    ...person
}
console.log(allDetails); // { id1: 10, id2: 101, fname: 'Shivam', lname: 'Shukla' }

// Copying one obj to another.

const data = {
    id1 : 10,
    id2 : 101,
    fname: 'Shivam',
    lname: 'Shukla',
    nestedObj : {
        age: 22
    }
}

const newObj = {
    ...data
}

console.log(newObj) // { id1: 10, id2: 101, fname: 'Shivam', lnamme: 'Shukla' }

//////////////////////////////////////////////////////////////////////////////////////////////

// COPY WILL BE ALWAYS SHALLOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// Any nested Arrays or Objects will be SHARED between these copies!!!!!!!!!!


//////////////////////////////////////////////////////////////////////////////////////////////

newObj.fname = 'SHIVAM';

newObj.nestedObj.age = 23;
console.log(newObj.fname+" "+newObj.nestedObj.age);  // SHIVAM 23
console.log(data.fname+" "+data.nestedObj.age);      // Shivam 23

// We can see that the changes made to nested object is reflected to both objects. It is called shallow copy.

// This applies to array also.

const a1 = [10 , 20 , [30, 40 ]];

const a2 = [...a1];

console.log(a1);    // [ 10, 20, [ 30, 40 ] ]
console.log(a2);    // [ 10, 20, [ 30, 40 ] ]

a1[0] = 100;

console.log(a1);    // [100, 20, [ 30, 40 ] ]
console.log(a2);    // [ 10, 20, [ 30, 40 ] ]

a1[2][0] = 300;
a2[2][1] = 400;

console.log(a1);    // [ 100, 20, [ 300, 400 ] ]
console.log(a2);    // [  10, 20, [ 300, 400 ] ]

// Changes made to nested array reflected to both arrays. 







