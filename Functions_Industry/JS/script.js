// Lindsay Lambert May 1, 2014 Functions Industry //
// How much will your income allow you to remodel your office building? //
var remodelBudget = prompt("What is your budget for the office building remodel?");
var contractorQuoteInside = prompt("How much money, in dollars, did the contractor quote you to complete the interior rooms?"); 
var contractorQuoteOutside = prompt("What was the estimate the contractor gave you on the exterior of the building?");

var remodelAmount = function(remodelBudget, contractorQuoteInside, contractorQuoteOutside){
	var totalRemodel = remodelBudget - (contractorQuoteInside + contractorQuoteOutside);
	return totalRemodel;
}
var remodel = remodelAmount(remodelBudget, contractorQuoteInside, contractorQuoteOutside);
(remodelBudget < contractorQuoteInside + contractorQuoteOutside) ? console.log("Congratulations! You can have all your remodeling done!") : console.log("Sorry, but you must choose your next move, because you do not have enough to complete both projects.");
if(contractorQuoteInside < remodelBudget || contractorQuoteOutside < remodelBudget){
	console.log("You have plenty of financial backing to complete some remodeling!");	
}else if(remodelBudget > contractorQuoteInside + contractorQuoteOutside){
	console.log("You do not have enough money to complete both projects.");
}else{
	console.log("You may want to reconsider what exactly you want to remodel and space the work out over a few years.");
}
