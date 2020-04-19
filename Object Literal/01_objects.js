
// By Shivam Shukla


const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
};


// Object also supports DYNAMIC PROPERTIES.

let mystery = 'answer';

const obj = {
  n1: 10,
  n2: 20,
  [mystery]: 30   // Dynamic property. It is not array literal!!
}

console.log(obj.mystery); // undefined
console.log(obj.answer);  // 30

// We can also directly write the constant or variable as the property of object.

const PI = Math.PI;
let answer = 78;

const obj = {

  n1: 10,
  n2: 20,
  PI,
  answer
}
console.log(obj); // { n1: 10, n2: 20, PI: 3.141592653589793, answer: 78 }
