// Lindsay Lambert April 17, 2014 Conditionals Industry//
// Ink For the Printer //
var priceOfInk = 29;
// the variable priceOfInk is assigned a value of 29 //
var eachYear= 12;
// the eachYear variable represents how many months are in a year and is set at the value 12 //
var buyPerMonth = prompt("How many times do you purchase ink for your company each month?");
// this sets the variable buyPerMonth at the response made by the user //
console.log("Each month, they go " + buyPerMonth + " times to buy ink for the company.");
// this prints to the console the response along with string variables to explain what the value represents //
var numOfCartridges = prompt("How many ink cartridges do you purchase each visit to the supplier?");
// the numOfCartridges variable is set to the response of the user, as well. //
console.log("Every trip to the supplier, " + numOfCartridges + " cartridges are purchased for the company.");
// this action will print to the console the number of cartridges puchased each trip as well as some string variables to explain. //
var monthlyNumInk = numOfCartridges * buyPerMonth;
// this calculation allows us to figure out how many cartridges are purchased each month and set the value to the variable monthlyNumInk. //
var pricePerMonth = monthlyNumInk * priceOfInk;
// this calculation sets the variable pricePerMonth to the result of the calculation of the monthly amount of cartridges purchases multiplied by the price. //
var totalPriceYear = eachYear * pricePerMonth;
// the totalPriceYear variable  is set to the result of the calculation finding out the monthly price multiplied by the 12 months in a year. //
if(totalPriceYear > 1750){
	// this if statement decides ultimately if the user is paying too much for ink each year //
	console.log("You're paying way too much for ink each year!");
	// this action prints the string variable above to the console, based on the decision. //
}else{
	// this is just a little else that will not be performing much of anything except printing to the console, as seen below, if the condition is true. //
	console.log("That is a pretty reasonable price per year for a business of your size.");
	// print string variable to console if condition is true //
}		
