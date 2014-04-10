// Lindsay Lambert April 8, 2014 Expressions Personal //
// How much do cigarettes cost you every year? //
var packCost = prompt("What does one pack of your preferred brand of cigarettes cost?");
// This initializes the variable packCost and assigns the value input by the user to it //
var cartonCost = prompt("How much does one carton of your preferred cigarettes cost?");
// This requests the price of a carton of cigarettes and assigns it to the variable cartonCost //
var pack = prompt("How many single packs of cigarettes do you purchase each week?");
// This asks the user how many packs they buy a week, which will be the value assigned to the variable pack //
var carton = prompt("How many cartons of cigarettes do you buy each week?");
// This assigns the number of cartons input by the user to the variable carton //
var packResult = packCost * pack;
// This calculates the weekly cost of single packs of cigarettes //
var cartonResult = cartonCost * carton;
// This determines the weekly cost of cartons of cigarettes //
var weekResult = packResult + cartonResult;
// This initializes the variable weekResult and assigns it the value of the cost of all cigarettes per week //
var weeksInYear = 52;
// This initializes the variable weeksInYear and assigns it the value 52 //
var result = weeksInYear * weekResult;
// This calculates the value of all money spent on cigarettes in a year //
console.log("You spend approximately " + result + " dollars each year on cigarettes!");
// This result is printed to the console along with an explanatory string //