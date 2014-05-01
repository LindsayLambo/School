// Lindsay Lambert April 24, 2014 Functions Worksheet //
// Circumference //
function calcCircumference(formulaVariable, pi, radius){
	var radius = 13;
	var pi = 3.14;
	var formulaVariable = 2;
	var circumference = pi * radius;
	var totalCircumference = circumference * formulaVariable;
	return totalCircumference;
}
calcCircumference(2, 3.14, 13);
console.log("The circumference is " + totalCircumference + ".");