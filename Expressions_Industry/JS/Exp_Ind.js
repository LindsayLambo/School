// Lindsay Lambert April 8, 2014 Expressions Industry //
// What is your average profit earned per client each quarter? //

var clientsMonth = prompt("What is the total number of clients for whom you worked during the first month?");
// The variable clientsMonth is initialized and its value is set to whatever the user inputs //
var costOfServices = prompt("What is the total amount you earned in the first quarter?");
// The variable costOfServices is initialized and its value is set to the input of the user //
var clientsPayFee = prompt("How many clients purchased your marketing package during the first quarter?");
// The variable clientsPayFee is assigned a value of whatever the user inputs //
var monthsInQuarter = 3;
// The monthsInQuarter variable is initialized and its value is set to 3 //
var marketingPackage = 100;
// The variable marketingPackage is initialized and has a value set at 100 //
var clientsBoughtMarketing = clientsPayFee * marketingPackage;
// This calculates the amount of money earned by the sales of the marketing package offered to clients and assigns it to the variable clientsBoughtMarketing //
var totalCostMonth = costOfServices / clientsMonth;
// This determines the average cost of the services provided to the clients over the course of a month and assigns it to the variable totalCostMonth //
var totalCostQuarter = totalCostMonth * monthsInQuarter;
// This calculation provides the value of all that has been earned throughout the quarter, not including the marketing packages, and assigns it to the variable totalCostQuarter //
var result = clientsBoughtMarketing + totalCostQuarter;
// This calculation assigns the variable result the value of every single bit of money earned during the quarter, including the marketing package revenue //
console.log("The average profit you earned quarterly was " + totalCostQuarter + " dollars per client. With your marketing package sales at " + clientsBoughtMarketing + " dollars, your total earnings for the quarter were " + result + " dollars!");
// This prints the results from the calculations to the console //
