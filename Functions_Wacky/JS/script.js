// Lindsay Lambert May 1, 2014 Functions Wacky //
// How many zombies could you kill in an attack? //
var numberGuns = prompt("How many guns do you have?");
// This prompts the user for a value and assigns it to the variable numberGuns //
var boxesAmmo = prompt("How many boxes of ammunition do you own?");
// The variable boxesAmmo is set to the value input by the user via a prompt. //
var skillLevel = prompt("What is your skill level? Please choose a number between 1 and 10, 10 being expert level.");
// Once again, skillLevel is set to whatever value the user enters //
var zombiesKilled = bulletsFlying(numberGuns, boxesAmmo, skillLevel);
// This is the invocation of the functions, while assigning the resulting value to the variable zombiesKilled. //
function bulletsFlying(numberGuns, boxesAmmo, skillLevel){
// this is the function which is being passed 3 parameters, with which it will perform the calculation. //
	var zombiesKilled = skillLevel + (numberGuns * boxesAmmo);
// this is assigning the result of the calculation to the variable zombiesKilled.	//
	return zombiesKilled;
// This literally returns the value that has been calculated by the function.	//
}
if(zombiesKilled > 100){
// 	This if statement says if the user's number of zombies killed is greater than 100, they can be on my squad. //
	console.log("You're on my squad!");
// This prints to the console the results of whether or not the user is able to kill more than 100 zombies. //	
}else{
//	This else gives an option for another outcome if the above condition is false. //
	console.log("You're going to have to stock up on weapons and train with us to be part of the crew.");
//	This will print the result of the conditional statement to the console if it is found to be true. //
}
	

