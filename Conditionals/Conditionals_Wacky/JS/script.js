// Lindsay Lambert April 17, 2014 Conditionals Wacky //
// What is the average cost of drinks and extracurricular spending of two college students per 9 week semester and is it over budget? //
var semesterInWeeks = 9;
var numberOfStudents = 2;
var partyBudgetSemester = 4000;
var weeklyCostOfAlcohol = prompt("How much do you spend per week on alcohol?");
var weeklyCostOtherActivities = prompt("How much do you spend each week on other party supplies and activities?");
var totalWeeklyCost = weeklyCostOfAlcohol + weeklyCostOtherActivities;
var totalSemesterCost = totalWeeklyCost * semesterInWeeks;
if(weeklyCostOfAlcohol === ""){
	weeklyCostOfAlcohol = prompt("You forgot to enter an answer! How much do you spend each week on alcohol?");
	console.log("They spent " + weeklyCostOfAlcohol + " dollars on alcohol weekly.");
}else{}
if(weeklyCostOtherActivities === ""){
	weeklyCostOtherActivities = prompt("You forgot to enter an answer! How much do you spend each week on other party supplies and activities?");
	console.log("They spent " + weeklyCostOtherActivities + " dollars per week on other supplies and activities.");
}else{}
(totalSemesterCost < partyBudgetSemester) ? console.log("Your partying may continue as you are spending an average of " + totalSemesterCost + " dollars out of your budget of " + partyBudgetSemester + " dollars.") : console.log("You really need to slow down the partying, because you're budget is " + partyBudgetSemester + " dollars and you've been spending an average of " + totalSemesterCost + " dollars!");
(totalSemesterCost < partyBudgetSemester) ? alert("Your partying may continue as you are spending an average of " + totalSemesterCost + " dollars out of your budget of " + partyBudgetSemester + " dollars.") : alert("You really need to slow down the partying, because you're budget is " + partyBudgetSemester + " dollars and you've been spending an average of " + totalSemesterCost + " dollars!");
