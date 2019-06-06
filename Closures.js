// Closure is a function that makes use of variable defined in OUTER function that have previously returned.

function outer(){
    var data = "Closures are ";

    return function inner(){
        var innerData= "awesome !";
        return data+ innerData;
    }
}

console.log(outer());     //[Function: inner]

console.log(outer()());   // Closures are awesomme !

// Another example.
function outer (a){

    return function inner(b){
        return a+b;
    }
}

console.log(outer(5)(10));   // 15

var adder=outer(5);
console.log(adder(10));      // 15


// Since JS doesn't support PRIVATE variable, Closures helps to make variable private.

function counter(){
    var count =0;

    return function(){
        return ++count;
    }
}

var c= counter();
console.log(c());   //1
console.log(c());   //2
console.log(c());   //3
console.log(c());   //4
console.log(c());   //5

console.log(c.count); // Undefined - as it is private.

// Another example 
function classRoom(){

    var students= ["Shivam","Elie"];
    return {
        getStudent : function(){
            return students;
        },

        addStudent : function(student){
            students.push(student);
            return students;
        }
    }
}

var course1=classRoom();

course1.getStudent();   // ["Shivam","Elie"]
course1.addStudent("Ian") //["Shivam","Elie","Ian"]

var course2=classRoom();
course2.getStudent();  // ["Shivam","Elie"]     // Doesn't affected by course1.