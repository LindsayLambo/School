// Lindsay Lambert April 17, 2014 Conditionals Personal //
// Flowers In The Garden-Do you have enough in your budget? //
var tulipsEach = 3;
var lilliesEach = 4;
var gerberDaisy = 7;
var gardenBudget = 500;
var numberLillies = prompt("How many lillies would you like to purchase?");
var numberTulips = prompt("If you're buying " + numberLillies + " lillies, how many tulips would you like to buy?");
var numberDaisy = prompt("If you are planning on getting " + numberLillies + " lillies and " + numberTulips + " tulips, then how many Gerber Daisies would you like to purchase?");
var lilliePrice = numberLillies * lilliesEach;
var tulipPrice = numberTulips * tulipsEach;
var daisyPrice = gerberDaisy * numberDaisy;
var lillieTulipPrice = lilliePrice + tulipPrice;
var totalPrice = lillieTulipPrice + daisyPrice;
if(numberLillies === ""){
	numberLillies = prompt("You forgot to answer! How many lillies would you like to purchase?");
	console.log("They chose to buy " + numberLillies + " lillies.");
}else{}
if(numberTulips === ""){
	numberTulips = prompt("You forgot to answer! If you're buying " + numberLillies + " lillies, then how many tulips would you like to buy?");
	console.log("They decided to buy " + numberTulips + " tulips.");
}else{}
if(numberDaisy === ""){
	numberDaisy = prompt("You forgot to answer! If you are planning on purchasing " + numberLillies + " lillies and " + numberTulips + " tulips, then how many Gerber Daisies would you like to buy?");
	console.log("They decided to buy " + numberDaisy + " Gerber Daisies.");
}else{}

if(totalPrice <= gardenBudget){
	console.log("Your total cost is " + totalPrice + " dollars, so you can buy all your flowers!");
	alert("Your total cost is " + totalPrice + " dollars, so you can buy all your flowers!");
}else if(totalPrice > gardenBudget){
	console.log("You have more flowers picked out than you can afford. Try a different combination!");
	alert("You have more flowers picked out than you can afford. Try a different combination!");
}else{
	console.log("There has been an error.")
	alert("There has been an error.")
}
