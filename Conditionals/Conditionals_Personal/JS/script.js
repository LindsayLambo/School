// Lindsay Lambert April 17, 2014 Conditionals Personal //
// Flowers In The Garden-Do you have enough in your budget? //
var tulipsEach = 3;
// variable tulipsEach is assigned the value 3 //
var lilliesEach = 4;
// variable lilliesEach is assigned the value of 4 //
var gerberDaisy = 7;
// the gerberDaisy variable is assigned the 7 value //
var gardenBudget = 500;
// the gardenBudget is assigned the amount 500 //
var numberLillies = prompt("How many lillies would you like to purchase?");
// this is a variable being assigned to the input from the users response to the prompt //
var numberTulips = prompt("If you're buying " + numberLillies + " lillies, how many tulips would you like to buy?");
// this variable is also being assigned to the input from the prompt asking the user for information //
var numberDaisy = prompt("If you are planning on getting " + numberLillies + " lillies and " + numberTulips + " tulips, then how many Gerber Daisies would you like to purchase?");
// the variable numberDaisy will be set at a value once the user responds to the prompt asking how many they would like to purchase //
var lillyPrice = numberLillies * lilliesEach;
// this calculation multiplies the number of lillies by their individual price, assigning this value to lillyPrice //
var tulipPrice = numberTulips * tulipsEach;
// this calculation allows us to set a value to the tulipPrice variable by multiplying the value of each tulip by the number of tulips. //
var daisyPrice = gerberDaisy * numberDaisy;
// this calculation provides a result that is set to the variable daisyPrice by multiplying the price and number of Gerber Daisies //
var lillyTulipPrice = lillyPrice + tulipPrice;
// this allows for the prices of all the flowers to be added up with the calculation below, as well //
var totalPrice = lillyTulipPrice + daisyPrice;
// now the totalPrice variable is the big number to watch to determine whether certain combinations of flowers will fit in your budget //
if(numberLillies === ""){
// this if statement lets the machine make sure the blanks were filled //
	numberLillies = prompt("You forgot to answer! How many lillies would you like to purchase?");
// if the blank was empty, this prompt will ask again and assign it to its variable //
	console.log("They chose to buy " + numberLillies + " lillies.");
// this action will print the strings and responses from users to the console //
}else{}
// this else lets us go on about our business, because that means a value was entered //
if(numberTulips === ""){
// if there was no value entered, the condition is true //
	numberTulips = prompt("You forgot to answer! If you're buying " + numberLillies + " lillies, then how many tulips would you like to buy?");
//the variable will be set again as the user is reminded to input a response to the above prompt //
	console.log("They decided to buy " + numberTulips + " tulips.");
// this prints to the console the strings and variables that will make up the message //
}else{}
// this little else means the user did input a value //
if(numberDaisy === ""){
// if there was yet another possible blank, this condition will be true //
	numberDaisy = prompt("You forgot to answer! If you are planning on purchasing " + numberLillies + " lillies and " + numberTulips + " tulips, then how many Gerber Daisies would you like to buy?");
// this variable will be set if the user must respond to this prompt //
	console.log("They decided to buy " + numberDaisy + " Gerber Daisies.");
// this action will print to the console the strings and variable that make up the message //
}else{}
// this else will let everything go as normal, for there has been an entry //


if(totalPrice <= gardenBudget){
	// if statement making decision that will result in true or false //
	console.log("Your total cost is " + totalPrice + " dollars, so you can buy all your flowers!");
	// action prints strings and variables in console //
	alert("Your total cost is " + totalPrice + " dollars, so you can buy all your flowers!");
// this alert prints strings and variables making up a message for the user to read //
}else if(totalPrice > gardenBudget){
// this else if gives another possibility of a coparison of the two variables and makes a decision //
	console.log("You have more flowers picked out than you can afford. Try a different combination!");
// this prints to the console the strings and variables to make up the message //
	alert("You have more flowers picked out than you can afford. Try a different combination!");
// this action prints the same message to the user through an alert //
}else{
// this else decides if the condition is true
	console.log("There has been an error.")
//this prints the message to the console //
	alert("There has been an error.")
	// this alert prints the message to the user //
}
