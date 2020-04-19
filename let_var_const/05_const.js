// Works same as let in case of scopes.


// using const doesn't means immutability!!!!! It just prevents from reassigning the reference to same constant.


// Scalar values (string, integers, booleans etc...)
const answer = 42;
const greeting = 'Hello';

// In case of scalar values , if we try to change value it will give error.

answer = 78;  // TypeError: Assignment to constant variable.




// Arrays and Objects ( We can not change reference but we can change the value at that reference.!!!!)
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

numbers[1]=78;

person.firstName = 'Shivam';
person.lastName = 'Shukla';

console.log(numbers); // [ 2, 78, 6 ]
console.log(person);  // { firstName: 'Shivam', lastName: 'Shukla' }
