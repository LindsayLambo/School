// Lindsay Lambert May 1, 2014 Functions Industry //
// How much will your income allow you to remodel your office building? //
var remodelBudget = prompt("What is your budget for the office building remodel?");
var contractorQuoteInside = prompt("How much money, in dollars, did the contractor quote you to complete the interior rooms?"); 
var contractorQuoteOutside = prompt("What was the estimate the contractor gave you on the exterior of the building?");
var remodelAmount = function(remodelBudget, contractorQuoteInside, contractorQuoteOutside){
	var totalRemodel = remodelBudget - (contractorQuoteInside + contractorQuoteOutside);
	
}