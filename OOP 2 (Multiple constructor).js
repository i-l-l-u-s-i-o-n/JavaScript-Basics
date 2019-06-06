// Created by Shivam Shukla.

function Car(make ,model, year){
    this.make=make;
    this.model=model;
    this.year=year;
    this.No_of_Wheel= 4;
}

function Bike(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    this.No_of_Wheel= 2;
}

// Here to remove duplication of code we can do ->
function Bike(make,model,year){
    Car(make,model,year);  // Here's the problem that this will refer to Car object and set the make , model, year property for Car object not for bike object.
    this.No_of_Wheel=2;    // It will work fine.
}

var ducati=new Bike("Awesome","ED332",2008);
console.log(ducati.No_of_Wheel);     //2
console.log(ducati.year);            // undefined.

// We can remove this problem by using call or apply to change context of this.

function Bike(make,model,year){
    Car.call(this,make,model,year);  // This will work fine.  
    this.No_of_Wheel=2;    
}
var ducati=new Bike("Awesome","ED332",2008);
console.log(ducati.No_of_Wheel);     //2
console.log(ducati.year);            //2008