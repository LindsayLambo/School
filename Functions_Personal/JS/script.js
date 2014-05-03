// Lindsay Lambert May 1, 2014 Functions Personal //
// How many months will it take to buy a new car? //
var monthlyLootForCar = prompt("How much money, in dollars, do you save each month to spend on a new car?");
var priceOfPotentialCar = prompt("How much are you willing to spend on a new car?");
var stashedMoney = prompt("How much stashed money do you have that you can put toward your new car fund?");
var numberMonthsToPay = buyNewCar(monthlyLootForCar, priceOfPotentialCar, stashedMoney);
function buyNewCar(monthlyLootForCar, priceOfPotentialCar, stashedMoney){
	var numberMonths = priceOfPotentialCar / monthlyLootForCar;
}