
// We can access the fields directly from object.

// Normal approach

const PI = Math.PI;
const E = Math.E;
const pow= Math.SQRT2;

// Destructuring 

const { PI, E, pow} = Math;
// The names must be same as the Object fields name. Else it will show undefiled.
// Eg-

const { PI, e } = Math;
console.log(PI);    // 3.141592653589793
console.log(e);     // undefined     => as there is no property named e in Math object.(it is E)
console.log(Math.E); // 2.718281828459045


// We can also use destructuring for for accessing some fields of an object as argument to the function.

const circle = {
    radius: 5,
    label: 'Circle C1'
}

// Creating fn which takes only radius field from the circle object as a argument.
const area = ( { radius }) => {
    return Math.PI*Math.pow(radius,2);
}

console.log(area(circle));

// Suppose if we want to use another optional parameter with default value.
const circle = {
    radius: 5,
    label: 'Circle C1'
}

const area = ( {radius}, {precision = 2} ={} ) => {
    return (Math.PI*Math.pow(radius,2)).toFixed(precision);
}

console.log(area(circle));                      // 78.54     By default 2 precision.
console.log(area(circle, { precision : 5 }));   // 78.53982  As precision property value is 5.



/////////////////////////////////////////////////////////////////////////////////////////////////////

// Destructuring with arrays.

// If we want to extract values of array to our local variables, we can do it by destructuring.

const [ a, b, c, d] = [ 1,2,3,4 ];
console.log(b); // 2

const [ a, , , d] = [ 1,2,3,4 ];
console.log(d);  // 4
