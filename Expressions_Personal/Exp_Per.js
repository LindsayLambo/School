// Lindsay Lambert April 8, 2014 Expressions Personal //

var packCost = prompt("What does one pack of your preferred brand of cigarettes cost?");
var cartonCost = prompt("How much does one carton of your preferred cigarettes cost?");
var pack = prompt("How many single packs of cigarettes do you purchase each week?");
var carton = prompt("How many cartons of cigarettes do you buy each week?");
var packResult = packCost * pack;
var cartonResult = cartonCost * carton;
var weekResult = packResult + cartonResult;
var weeksInYear = 52;
var result = weeksInYear * weekResult;
console.log(result);