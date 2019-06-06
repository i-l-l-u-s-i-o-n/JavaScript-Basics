// this is a reserved keyword in JS
// Ususally determined by a how a function is called(what we call execution context)
// can be determined using 4 rules(global, object/implicit, explicit, new)


// 1.) RULE 1- Global Context

// When this is not inside of  DECLARED OBJECT.

//here the valu of this will be global object.
// In case of browser, it will be 'window'.
console.log(this)    // window

function whatIsThis(){
    return this;
}

function variableInThis(){
    // Since the value of this is the window.
    // All we are doing here is creating a global variable.
    this.person= 'Shivam';
}

variableInThis();
console.log(person);  //Shivam

whatIsThis();         // window


// Using Strict Mode

// We can use strict mode by typing "use strict".
// In this case, the value of 'this' is undefined inside a function.
// So we can't create Global variable by mistake, as we did in line 21.

"use strict"

console.log(this);

function whatIsThis1(){
    return this; // undefined as this is used inside the function and we used strict mode.
}

function variableInThis1(){
    // Here again this is undefined.
    this.person1='Shivam'
}

whatIsThis1(); // undefined

variableInThis1();   // TypeError, can't set person on undefined.



// ===================================================================================================//

//2.) RULE 2 - Implicit/Object

// If this is used inside a delclared object, It will take value of closest parent object.

var person= {
    
    name:'Shivam',

    sayHi : function (){
        console.log("Hi "+ this.name);   
    },

    determineContext : function(){
        console.log(this === person)     
    }
}
person.sayHi() ;   // Hi Shivam

person.determineContext()   //true


// In case of nested object:

var person1= {
    
    name:'Shivam',

    sayHi : function (){
        console.log("Hi "+ this.name);   
    },

    determineContext : function(){
        console.log(this === person)     
    },

    dog: {
        sayHello : function(){
            console.log("Hello "+ this.name); // this take the value of dog object and since there is no 'name' property, so it will be error.
        },

        determineContext : function(){
            console.log(this === person1.dog)    
        }
    }
}

person1.dog.sayHello();   //Hello undefined
person1.dog.determineContext();    //true

// ================================================================================================= //


// 3.) RULE 3 - Implicit method (call() , apply(), bind() )

// These methods are used to change the value of this .

// i.) call( thisArg ,a ,b ,c , ...... )   -> It takes multiple parameters but first param is the value of 'this'.
                                        // Other params are the params for the function.

// Example of call ->

var shivam= {
    name:"Shivam",

    sayHi: function(){
        console.log("Hi "+this.name);
    }
}
var tim= {
    name:"Tim",

    sayHi: function(){
        console.log("Hi "+this.name);
    }
}

// Here 2 objects are almost same. except the value of this in sayHi();
// So we can refactor it using call();
var shivam= {
    name:"Shivam",

    sayHi: function(){
        console.log("Hi "+this.name);
    }
}
var tim= {
    name:"Tim",
}

shivam.sayHi();         // Hi Shivam

shivam.sayHi.call(tim); // Hi Tim      // Here 'tim' is passed to be the value of 'this'.

// ii.) apply(thisArg , [a, b, c, .....]) -> It takes only 2 param and same as call().

var shivam= {
    name:"Shivam",

    sayHi: function(){
        console.log("Hi "+this.name);
    },

    add : function(a,b,c,d){
        console.log("Sum : "+(a+b+c+d) +" calculated by "+this.name);
    }
}
var tim= {
    name:"Tim",
}

shivam.add(2,2,2,2);                    //Sum : 8 calculated by Shivam

// Using call()
shivam.add.call(tim, 2, 2, 2, 2);       //Sum : 8 calculated by Tim

// Using apply()
shivam.add.apply(tim, [2, 2, 2, 2]);    //Sum : 8 calculated by Tim



