// Lindsay Lambert May 1, 2014 Functions Wacky //
// How many zombies could you kill in an attack? //
var numberGuns = prompt("How many guns do you have?");
var boxesAmmo = prompt("How many boxes of ammunition do you own?");
var skillLevel = prompt("What is your skill level? Please choose a number between 1 and 10, 10 being expert level.");
var zombiesKilled = bulletsFlying(numberGuns, boxesAmmo, skillLevel);
function bulletsFlying(numberGuns, boxesAmmo, skillLevel){
	var zombiesKilled = numberGuns * (boxesAmmo * skillLevel);
	return zombiesKilled;
}
console.log("The number of zombies you can kill is " + zombiesKilled + ", so come check out my compound when the time comes. I might need you!");
alert("The number of zombies you can kill is " + zombiesKilled + ", so come check out my compound when the time comes. I might need you!");")