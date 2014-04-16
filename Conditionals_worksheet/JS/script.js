// Lindsay Lambert April 15, 2014 Conditionals Worksheet //
// Last Chance For Gas! //

var mpg = 20;
var percentInTank = .5;
var tankCapacity = 22;
var gallonsInTank = tankCapacity * percentInTank;
var milesToGo = gallonsInTank * mpg;
if(milesToGo < 200){
	console.log("You only have " + gallonsInTank + " gallons of gas in your tank, so you better get gas now while you can!");
}else{
	console.log("Yes, you can make it without stopping for gas!");
}