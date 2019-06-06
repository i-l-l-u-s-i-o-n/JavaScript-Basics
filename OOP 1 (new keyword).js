// JS doesn't have classes like JAVA, Python etc..
// We can make use of CONSTRUCTOR FUNCTIONS and OBJECTS to create objects.

//new keyword performs following 4 tasks->
// > Craetes an empty object.
// > Assigns the value of 'this' to be that object.
// > It adds 'return this' statement to the constructor function.
// > Creates a link (which we can access as __proto__ ) between the object created and prototype property of constructor function.

function Dog(name,age){
    this.name=name;
    this.age=age;

    this.bark=function(){
        console.log(this.name + " just Barked!");
    }
}

var rusty=new Dog("Rusty",3);
rusty.bark();                //Rusty just Barked!

var fido=new Dog("Fido" ,4);
fido.bark();                 //Fido just Barked!