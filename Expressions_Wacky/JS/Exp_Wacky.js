// Lindsay Lambert April 8, 2014 Expressions Wacky //
// How much does your liquor and Twizzlers cost you each month? //

var handles = prompt("How many handles of liquor do you purchase each week?");
// This initialized the variable handles and set its value as the response from my prompt asking the user how many half-gallons of liquor they buy each week. //
var handleCost = prompt("How much does one of those handles of your preferred liquor cost?");
// This initializes the variable handleCost and assigns it the value of how much the user's half-gallon of liquor costs, as they input it. //
var handleTotal = handles * handleCost;
// This line calculates the weekly cost of liquor //
var twizzlerCase = prompt("How many cases of Twizzlers do you buy each week?");
// This assigns the value input by the user to the variable twizzlerCase //
var caseCost = prompt("How much does your favorite kind of Twizzlers cost per case?");
// This asks the user what a case of their Twizzlers costs and assigns the response to the variable caseCost //
var twizzlerTotal = twizzlerCase * caseCost;
// This determines the total cost of Twizzlers per week //
var totalCost = handleTotal + twizzlerTotal;
// This just calculated the weekly total spent on liquor and Twizzlers //
var weeksInMonth = 4;
// This simply initialized the variable weeksInMonth and set its value at 4 //
var result = totalCost * weeksInMonth;
// This calculated the monthly cost of liquor and Twizzlers //
console.log("Each month, you are spending " + result + " dollars on handles of liquor and cases of Twizzlers!");
// This printed the result in dollars of what is spent monthly on yummy liquor and Twizzlers //