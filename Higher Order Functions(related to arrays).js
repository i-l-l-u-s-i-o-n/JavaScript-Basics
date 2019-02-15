// Created by Shivam Shukla.

const ages=[32,12,22,65,38,78,23,14,18,19,20,35,25];

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

// forEach(function( iterator, index, array){})

ages.forEach(function(age){
    if(age>21){
        console.log(age);
    }
});


// ================================================  filter() =========================================================== //

// used to filter the elements of array based on the definition of callback function , when returns "true".

let canDrink=[];
// We use filter method to add the ages to the array canDrink, which are greater than 21.

canDrink=ages.filter(function(age){
    if(age>21){
        return true;
    }
});
console.log(canDrink);

// we can also use arrow function.
let canApply=[];

canApply=ages.filter( age => age>35);    // Again the beauty of arrow !

console.log(canApply);

// Using filter to get ratails complanies.
let retail_companies=[];

retail_companies=companies.filter( company => company.category==="Retail");

retail_companies.forEach(company => console.log(company));


// Using filter to get 80's company
let eightees_company=[];
eightees_company=companies.filter( company => company.start>=1980 && company.end<1990);

eightees_company.forEach(company => console.log(company));



// ===================================================== map() ========================================================== //

// map(function(iterator, index, array){})

// It creates a new array with elements returned from callback function called on given array.

// Create a array which consist the name of each company .
let company_names=companies.map(function(company){
    return company.name;
});


// We can also use arraow function.
// Create array of String conataing company name with thier start and end year.

let company_details=companies.map( company => `${company.name}  [${company.start} - ${company.end}]`);
company_details.forEach( company => console.log(company));

// First find sqrt of each age then multiply it by 2 and store it in array !!!!!!
// Using maps, it can be done as ->

let play_with_age= ages.map(age => Math.sqrt(age)).map(age => age*2);      // No for(), No forEach, map() makes it pretty easy!!

console.log(play_with_age);



// ============================================== sort() ================================================================ //

// Sorts the array as per the definition of callback function.

// Sort the ages in increasing order.

ages.sort(function(age1, age2){
    if(age1 > age2){
        return 1;
    }else{
        return -1;
    }
});

console.log(ages);


// Sort the companies as per their start date.

let sorted_companies=companies.sort((c1, c2) => c1.start > c2.start ? 1: -1);          // Not a magic :)

sorted_companies.forEach(company => console.log(company));

// If no sort definition is provided the ->

let sample=[5,45,33,65,12,123,543,76].sort();
console.log(sample);

// OUTPUT -> Array(8) [12, 123, 33, 45, 5, 543, 65, 76]           It only sorts on the basis of first digit !!

let string_sample=["Hello","hello","there","!","54",433,"Wow",55].sort();
console.log(string_sample);

// OUTPUT -> Array(8) ["!", 433, "54", 55, "Hello", "Wow", "hello", "there"]     It again compares the first letter !!




// ==================================================== reduce() ======================================================== //

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// Used to reduce the array to a single value.

let ages_sum=ages.reduce(function(total, age){
    return total+age;
}, 0 );
console.log(ages_sum);

// Using arrow ->
let sum_of_ages=ages.reduce((total, age) => total+age);
console.log(sum_of_ages);

// Get total years for all companies !

let total_years=companies.reduce((total, company) => total+=(company.end-company.start), 0);
console.log(total_years);



// =======================================================================================================================//

// COMBINING ALL METHODS IN SINGLE EXAMPLE - >>>>>>>>

var special_ages=ages
    .map(age => age * 2)                            // Multiply each age by 2 .
    .filter(age => age >40 )                        // Return only ages, greater than 40.
    .sort((age1, age2 ) => age1 > age2 ? 1 : -1)    // Sort ages in increasing order (using TERNARY operator).
    .reduce((sum, age ) => sum+age, 0);             // Returns sum of all ages returned after processing by above 3 methods.

console.log(special_ages);



// ====================================================================================================================== //