
// We can define string with 3 types-

// Using double quotes if we've to include single quote in our string.Use \ to include " " in our string.

const greeting = "Hello 'Mr. Shivam Shukla.'";

// Using Single quotes.
const answer = 'Forty Two';


// Using BACKTICK - This is called template string. 
// Using backtick we can have the feature which we call INTERPOLATION i.e. to inject dynamic
// values in the string using ${ }

const name = 'Shivam Shukla';
const html = `<div> Hello ${ name } </div>`;

console.log(html)

// It can also easily contain multiple line.
const html = `
              <div> 4 square is equal to : ${Math.pow(4,2)} </div>
              <div> Random number : ${Math.random()}</div>
              `;
console.log(html);

// Output


// <div> 4 square is equal to : 16 </div>
// <div> Random number : 0.47845480252784456</div>
