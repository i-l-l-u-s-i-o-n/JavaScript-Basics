// JS doesn't have classes like JAVA, Python etc..
// We can make use of CONSTRUCTOR FUNCTIONS and OBJECTS to create objects.

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