// Lindsay Lambert April 17, 2014 Conditionals Wacky //
// What is the average cost of drinks and extracurricular spending of two college students per 9 week semester and is it over budget? //
var semesterInWeeks = 9;
// the variable semesterInWeeks is set at a value of 9. //
var numberOfStudents = 2;
// the number of students is 2 //
var partyBudgetSemester = 4000;
// the party semester budget has the variable set at 4000 dollars //
var weeklyCostOfAlcohol = prompt("How much do you spend per week on alcohol?");
// the variable weeklyCostOfAlcohol is assigned the value that is input by the user. //
var weeklyCostOtherActivities = prompt("How much do you spend each week on other party supplies and activities?");
// the variable above is being assigned the value input by the user via the above prompt asking for information. //
var totalWeeklyCost = weeklyCostOfAlcohol + weeklyCostOtherActivities;
// this calculation sets the variables value to the sum of the two other variables. //
var totalSemesterCost = totalWeeklyCost * semesterInWeeks;
// the variable totalSemesterCost is being set as the value that results from multiplying the two above variables. //
if(weeklyCostOfAlcohol === ""){
// in this if statement, if the user input nothing, they will be reminded with another prompt and have another chance to do so. //
	weeklyCostOfAlcohol = prompt("You forgot to enter an answer! How much do you spend each week on alcohol?");
//the variable weeklyCostOfAlcohol is being assigned the value of the response from the above prompt. //
	console.log("They spent " + weeklyCostOfAlcohol + " dollars on alcohol weekly.");
// the strings and weekly cost of alcohol are being printed to the console. //
}else{}
// this else lets us know to keep going if there was an input //
if(weeklyCostOtherActivities === ""){
// in this if statement, once again, if there was no input for the second prompt in the code, the user will be reminded. //
	weeklyCostOtherActivities = prompt("You forgot to enter an answer! How much do you spend each week on other party supplies and activities?");
// this is the action of prompting the user once again to receive input to calculate by asking again. //
	console.log("They spent " + weeklyCostOtherActivities + " dollars per week on other supplies and activities.");
// this action prints to the console whatever amount the user entered as well as the strings on either side. //
}else{}
// this else lets us know to continue on if there was an input //
(totalSemesterCost < partyBudgetSemester) ? console.log("Your partying may continue as you are spending an average of " + totalSemesterCost + " dollars out of your budget of " + partyBudgetSemester + " dollars.") : console.log("You really need to slow down the partying, because you're budget is " + partyBudgetSemester + " dollars and you've been spending an average of " + totalSemesterCost + " dollars!");
// these are my ternaries- they shorten if-when statements and make a comparison between two variables, then decide which action to perform. //
(totalSemesterCost < partyBudgetSemester) ? alert("Your partying may continue as you are spending an average of " + totalSemesterCost + " dollars out of your budget of " + partyBudgetSemester + " dollars.") : alert("You really need to slow down the partying, because you're budget is " + partyBudgetSemester + " dollars and you've been spending an average of " + totalSemesterCost + " dollars!");
// this ternary allows me to combine a lot of code into a smaller equation with options taking up minimal space that will be chosen from when the decision is made. This one sends an alert to the user, while the above ternary will print to the console. //