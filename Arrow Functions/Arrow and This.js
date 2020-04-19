// By Shivam Shukla


let dog = {

    name: 'Tommy',
    sayHelloWithoutArrow: function() {
        console.log("Hello "+this.name+". The value of this is : "+JSON.stringify(this));
        // Here this refers to the nearest caller i.e. dog object.
    },
    sayHelloWithArrow: () => {
        console.log("Hello "+this.name+". The value of this is : "+JSON.stringify(this));
        // Here this keyword is associated with the same this keyword that was available in the functions scope when it was defined.
    }
}

dog.sayHelloWithoutArrow();  //Hello Tommy. The value of this is : {"name":"Tommy"}
dog.sayHelloWithArrow();     //Hello undefined. The value of this is : {}



this.fname = 'Shivam';

let person = {

    fname: 'Samer',
    sayHelloWithoutArrow: function() {
        console.log("Hello "+this.fname+". The value of this is : "+JSON.stringify(this));
        // Here this refers to the nearest caller i.e. dog object.
    },
    sayHelloWithArrow: () => {
        console.log("Hello "+this.fname+". The value of this is : "+JSON.stringify(this));
        // Here this keyword is associated with the same this keyword that was available in the functions scope when it was defined.
    }
}

person.sayHelloWithoutArrow();  //Hello Samer. The value of this is : {"fname":"Samer"}
person.sayHelloWithArrow();     //Hello Shivam. The value of this is : {"fname":"Shivam"}
