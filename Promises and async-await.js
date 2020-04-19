
// For asynchronous programming we can use promises or async await.

// Promises can be resolved using .then() or async-await .

// Eg-

const https = require('https');

// Creating a function that returns a promise.

// Inside function we are creating a promise and returning it.
function fetch (url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (rd) => data = data + rd);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

// A promise can bbe resolved(fulfilled)  OR rejected(unfulfilled).
// To resolve a promise use .then() block and to handle the rejection of promise, use .catch() block.

// as fetch function return a promise so let's resolve it.
fetch('https://www.javascript.com/')
    // resolving
    .then( (data) => {
      console.log(data.length);             // 35365
    })

    // when a promise is rejected i.e some error occured while calling API
    .catch( (err) => {
      console.log(err);
    }) 



// Using async-await to resolve a promise

// For this first we need to create a async function in which we have to wait by using await until data is fetched.

async function fetchingDataCompleted(){

  // waiting until data is fetched.
  const data = await fetch('https://www.javascript.com/');

  // perform operation of data as it is fetched.
  console.log(data.length);                           // 35365
}
// Now execute this async function to resolve promise.
fetchingDataCompleted();



// We can run it directly as - 
(
  async function(){
  
    // waiting until data is fetched.
    const data = await fetch('https://www.javascript.com/');
  
    // perform operation of data as it is fetched.
    console.log(data.length);                                             // 35365
  }
)();


