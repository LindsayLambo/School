// Lindsay Lambert April 15, 2014 Conditionals Worksheet //
// Last Chance For Gas! //

var mpg = 20;
// variable mpg is assigned value of 20 //
var percentInTank = .5;
// variable percentInTank is set at .5 for 50% //
var tankCapacity = 22;
// the tankCapacity variable is assigned a value of 22 gallons //
var gallonsInTank = tankCapacity * percentInTank;
// the variable gallonsInTank is set as the result of multiplying the tank capacity with the percent of gas in the tank to find out how much gas you have. //
var milesToGo = gallonsInTank * mpg;
// the milesToGo variable is set as 220 with the calculation being 11 gallons of gas multiplied by the 20 mpg //
if(milesToGo < 200){
	// this if statement tells the machine that if these conditions are true, to perform the following action //
	console.log("You only have " + gallonsInTank + " gallons of gas in your tank, so you better get gas now while you can!");
	// this function prints the strings with the variable in between to the console //
}else{
	// this else clause tells the machine that if the above conditions are not true, perform the action below //
	console.log("Yes, you can make it without stopping for gas!");
	// this function prints out the above string to the console if the conditions are found to be false //
}
// Check The Login // 
var usernameEntered = "LindsayLambo";
// the variable usernameEntered is set to the string value "LindsayLambo" //
var passwordEntered = "WrongPassword";
// the passwordEntered variable is set to the string value "WrongPassword" //
var correctUsername = "LindsayLambo";
// this variable is set as the correct username, which is "LindsayLambo" //
var correctPassword = "MyPassword";
// correctPassword is a variable being set to another string value of "MyPassword" //
if(usernameEntered === correctUsername && passwordEntered === correctPassword){
	// this if statement uses the AND operator to enable us to compare two sets of variables at once.  This conditional statement is stating that if the entered and correct passwords match, along with the entered and correct usernames matching... //
	console.log("Welcome, " + usernameEntered + "!");
	// this action will be performed if the above condition is true; it will print the string and variable combination to the console. //
}else if(usernameEntered === correctUsername && correctPassword != passwordEntered){
	// this else if condition allows us to compare two sets of variables once again, but with the usernames matching while the passwords do not. //
	console.log("Password does not match our records.");
	// this action prints the above string to the console if this condition is true. //
}else{
	// the only other option is for the password not to match, with or without matching usernames, so it will determine whether or not to perform the action below. //
	console.log("User not found. Try again.");
	// this action prints to the console the above string if the other two conditions have been false, leaving this one to be true. //
}
// Movie Ticket Price //
var movieTime = 4;
var customerAge = 37;
if(movieTime < 6 && movieTime > 2){
	console.log("The ticket price is $7.00.");
}else if(customerAge > 55 && customerAge < 10){
	console.log("The ticket price is $7.00.");
}else{
	console.log("The ticket price is $12.00.");
}