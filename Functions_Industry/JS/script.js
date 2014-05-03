// Lindsay Lambert May 1, 2014 Functions Industry //
// How much will your income allow you to remodel your office building? //
var remodelBudget = prompt("What is your budget for the office building remodel?");
// This is a prompt asking the user to enter a value which will be stored in the variable remodelBudget. // 
var contractorQuoteInside = prompt("For how much money did the contractor quote you to complete the interior rooms?");
// This prompt assigns the value input by the user to the variable contractorQuoteInside. //
var contractorQuoteOutside = prompt("What was the estimate the contractor gave you on the exterior of the building?");
// One last prompt, it collects a value from the user, then sets the variable contractorQuoteOutside to that value. //
var remodelAmount = function(remodelBudget, contractorQuoteInside, contractorQuoteOutside){
// My beautiful anonymous function is all colorful and beautiful...oh! It also received these passed parameters and was assigned a name in a different way. //	
	var totalRemodel = remodelBudget - (contractorQuoteInside + contractorQuoteOutside);
// This is my calculation, whose result is assigned to the totalRemodel variable. //	
	return totalRemodel;
// This is returning the value stored in the variable totalRemodel. //	
}
var remodel = remodelAmount(remodelBudget, contractorQuoteInside, contractorQuoteOutside);
// I am calling my anonymous function, having defined it first, and the arguments have been passed to the function. //
(remodelBudget < contractorQuoteInside + contractorQuoteOutside) ? console.log("Congratulations! You can have all your remodeling done!") : console.log("Sorry, but you must choose your next move, because you do not have enough to complete both projects.");
// This is my sweet little ternary, who makes life much easier by letting the developer write an entire if else or else if, or however, statement all on one line. It also prints the results to the console. //
if(contractorQuoteInside < remodelBudget || contractorQuoteOutside < remodelBudget){
// This if statement is saying if the remodel budget is greater than one OR the other, the user can get at least part of their remodeling done. //
	console.log("You have enough financial backing to complete some remodeling!");	
// This will print to the console if the statement is true. //
}else if(remodelBudget < contractorQuoteInside + contractorQuoteOutside){
// This else if statement gives a second option for the decision that will ultimately find a true statement. //
	console.log("You do not have enough money to complete both projects.");
// This will print the string as a message in the console if found to be true. //
}else{
// Any other kind of situation or stipulation will fall into this third option, which would mean it was found to be true. //
	console.log("You may want to reconsider what exactly you want to remodel and space the work out over a few years.");
// This will print the string in the console as a message to the developer if it is found to be true. //
}
