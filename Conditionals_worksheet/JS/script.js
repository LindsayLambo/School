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
var passwordEntered = "WrongPassword";
var correctUsername = "LindsayLambo";
var correctPassword = "MyPassword";
if(usernameEntered === correctUsername && passwordEntered === correctPassword){
	console.log("Welcome, " + usernameEntered + "!");
}else if(usernameEntered === correctUsername && correctPassword != passwordEntered){
	console.log("Password does not match our records.");
}else{
	console.log("User not found. Try again.");
}
// 