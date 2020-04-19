

// 'let' do not leak in function or block scope.

// 'var' leaks in block scope but not in function scope.

// So using let is preferred in modern JS.

// Variable and Block scope

if(true){
    
    var x =10; // x will be available outside block.
    let y =10; // y will NOT be available outside block.
}

console.log(x); // 10
console.log(y); // Reference error: y is not defined.


{
    var x = 20;
    {
        var x1 = 200;
        {
            var x2 = 2000;
        }
        console.log(x2);
    }
    console.log(x1);
}
console.log(x);


// OUTPUT
// 2000
// 200
// 20

{
    let x = 20;
    {
        let x1 = 200;
        {
            let x2 = 2000;
        }
        console.log(x2);
    }
    console.log(x1);
}
console.log(x);

// OUTPUT

// ReferenceError: x2 is not defined



for(var i=0;i<10;i++){
    // block scope
}

console.log(i);  // 10

for(let i=0;i<10;i++){
    // block scope
}

console.log(i); // ReferenceError: i is not defined


////////////////////////////////////////////////////////////////////////////////////////////////////

function s(){

    // Function scope

    var x = 10;  // var works fine and don't leak in function scope.
    
    let y = 10; // let don't leak in both block or function scope.

}

console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
