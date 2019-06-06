// EVERY constructor function has a property on it called "PROTOTYPE", which is an object.
// The prototype object has a property on it called"CONSTRUCTOR" , which points back to the constructor function.
// Anytime an object is created using new, a property called "__proto__" grts created , linking the object and the 
// prototype property of the constructor function.

function Person(name){
    this.name=name;
}

console.log(Person.prototype); //Person {}

var shivam=new Person("Shivam");
var colt= new Person("Colt");

console.log(shivam.__proto__ === Person.prototype); //true

console.log(Person.prototype.constructor === Person); //true

// We can add a property to prototype and it will be accessed by all the objects created from that constructor function.
Person.prototype.isDeveloper = true;

console.log(shivam.isDeveloper);  // true.


// Prototype can also be used to reduce the constructor code.
// If 1000000 object have to be created then it will be efficient to use prototype and set the properties which will remain same for all objects.

function Vehicle(make,model,year){

    // Placing all properties which are not shared by the objects.
    this.make=make;
    this.model=model;
    this.year=year;
    this.isRunning=false;

}

// Adding methods using prototype ->
// Add only those properties and functions which will be shared by the objects.
Vehicle.prototype.turnOn =function(){
    this.isRunning=true;
}

Vehicle.prototype.turnOff= function(){
    this.isRunning =false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning){
        return "Beep !";
    }
}

var vehicle=new Vehicle();

console.log(vehicle.isRunning); // false
vehicle.turnOn();
console.log(vehicle.isRunning); //true
console.log(vehicle.honk());    //Beep !