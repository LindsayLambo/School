// Lindsay Lambert April 8, 2014 Expressions Industry //
// What is your average profit earned per client each quarter? //

var clientsMonth = prompt("What is the total number of clients for whom you worked during the first month?");
var costOfServices = prompt("What is the total amount you earned in the first quarter?");
var clientsPayFee = prompt("How many clients purchased your marketing package during the first quarter?");
var monthsInQuarter = 3;
var marketingPackage = 100;
var clientsBoughtMarketing = clientsPayFee * marketingPackage;
var totalCostMonth = costOfServices / clientsMonth;
var totalCostQuarter = totalCostMonth * monthsInQuarter;
var result = clientsBoughtMarketing + totalCostQuarter;
var resultTotal = totalCostQuarter + clientsBoughtMarketing;
console.log("The average profit you earned quarterly was " + totalCostQuarter + " dollars per client. With your marketing package sales at " + clientsBoughtMarketing + ", your total earnings for the quarter were " + resultTotal + " dollars!");

