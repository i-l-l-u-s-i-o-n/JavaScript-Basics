// Promises are the alternate for the callback and allows effective error handling and avoids callback hell problem.

var demoPromise = new Promise((resolve,reject)=>{
    if(true){
        resolve("It Worked");
    }
    else{
        reject("It didn't work")
    }
})


demoPromise.then((msg)=>{
    console.log(("Resolved the promise"));
    console.log(msg);
}).catch((errorMsg)=>{
    console.log("Promise rejected");
    console.log(errorMsg);
})
