// Lindsay Lambert May 1, 2014 Functions Personal //
// How many months will it take to buy a new car? //
var monthlyLootForCar = prompt("How much money, in dollars, do you save each month to spend on a new car?");
// This prompt gathers a value from the user and assigns it to the variable monthlyLootForCar. //
var priceOfPotentialCar = prompt("How much are you willing to spend on a new car?");
// The variable priceOfPotentialCar is set to the value that is input by the user when prompted. //
var stashedMoney = prompt("How much stashed money do you have that you can put toward your new car fund?");
// This prompt will find out the quantity of money the user may or may not have stashed and assigns it to the variable stashedMoney. //
var numberMonths = buyNewCar(monthlyLootForCar, priceOfPotentialCar);
// While invoking, or calling, the function buyNewCar(), the variable numberOfMonths is set to the value the function's calculation returns and monthlyLootForCar, as well as priceOfPotentialCar are passed as arguments to the function. //
function buyNewCar(monthlyLootForCar, priceOfPotentialCar){
// The function buyNewCar is passed monthlyLootForCar and priceOfPotentialCar as parameters. //	
	var numberMonths = priceOfPotentialCar / monthlyLootForCar;
// The actual calculation that determines how many months it will take for the user to buy a new car based on their monthly savings. Later, they can be told (with alerts) whether or not they can use that money toward their car, keep it stashed, or if the amount was zero, they can obviously only use what they save monthly.	
	return numberMonths;
// This returns the value of the calculation, which was assigned to the variable numberMonths. //	
}
if(stashedMoney > 199){
// This if statement decides whether the value assigned to stashedMoney is greater than 199.  //
	console.log("You can use this money for your new car!");
// This will print to the console, but would really tell the user they can use this money for their car!	
}else if(stashedMoney > 149){
// This else if statement determines the value entered by the user to be greater than 149, so true, or less, being false. //	
	console.log("You can always keep that money stashed where it is now.");
// The print to console message would essentially let the user know that since the amount of money is less than average monthly savings for the new car, maybe they should just hold on to it. //	
}else{
// This cute little else says that if none of the others are found to be true, then apparently the user has no stashes of money, which means he will only be able to rely on the money he saves monthly for his new car. //	
	console.log("If you do not have any stashed money, you will have to use what you have been saving monthly to buy your new car.");
// This will print the bad news to the user, as if he didn't kind of already know, that he will not have anything more than his monthly savings.	
}
	
