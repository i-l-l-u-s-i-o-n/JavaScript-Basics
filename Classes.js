

// JS also offers the object oriented paradigm.

// Defining class

class Person {

    // Constructor
    constructor(name){
        this.name = name;
    }

    // Defining methods
    greet(){
        console.log(`Hello ${this.name}`);
    }
}


// Class extending other class.
class Student extends Person {

    constructor(name,grade){

        // calling parent class constructor
        super(name);
        this.grade = grade;
    }

    greet(){
        console.log(`Hello ${this.name}. Your grade is : ${this.grade}`);
    }
}

// Creating objects

const p1 = new Person('Tim');
p1.greet();                     // Hello Tim

const s1 = new Student('Bob','A');
s1.greet();                     // Hello Bob. Your grade is : A

const s2 = new Student('Samer','A');
s2.greet = () =>  console.log(`Hello ${s2.name}. You're the special one!`);

s2.greet();                     // Hello Samer. You're the special one!