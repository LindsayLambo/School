// Lindsay Lambert April 17, 2014 Conditionals Industry//
// Ink For the Printer //
var priceOfInk = 29;
var eachYear= 12;
var buyPerMonth = prompt("How many times do you purchase ink for your company each month?");
console.log("Each month, they go " + buyPerMonth + " times to buy ink for the company.");
var numOfCartridges = prompt("How many ink cartridges do you purchase each visit to the supplier?");
console.log("Every trip to the supplier, " + numOfCartridges + " cartridges are purchased for the company.");
var monthlyNumInk = numOfCartridges * buyPerMonth;
var pricePerMonth = monthlyNumInk * priceOfInk;
var totalPriceYear = eachYear * pricePerMonth;
if(totalPriceYear > 1750){
	console.log("You're paying way too much for ink each year!");
}else{
	console.log("That is a pretty reasonable price per year for a business of your size.");
}		
