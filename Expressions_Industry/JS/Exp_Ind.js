// Lindsay Lambert April 8, 2014 Expressions Industry //
// What is your average profit earned per client each quarter? //

var clientsMonth = prompt("What is the total number of clients for which you worked during the first month?");
var costOfServices = prompt("What is the total amount you earned in the first quarter?");
var clientsPayFee = prompt("How many clients purchased your marketing package during the first quarter?");
var monthsInQuarter = 3;
var marketingPackage = 100;
var clientsBoughtMarketing = clientsPayFee * marketingPackage;
var totalCostMonth = costOfServices / clientsMonth;
var totalCostQuarter = totalCostMonth * monthsInQuarter;
var result = totalCostQuarter + clientsBoughtMarketing;
console.log("The average profit you earned quarterly was " + result + "dollars per client along with your marketing package sales!")
