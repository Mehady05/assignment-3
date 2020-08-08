// feetToMile
function feetToMile(feet){
  var mile = feet/5280;
  return mile;
}
var result = feetToMile(5280);
console.log(result);


// woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalFruit = chairCount + tableCount + bedCount;
    return totalFruit;
}
var woodResult = woodCalculator(1, 1, 1);
console.log(woodResult);


// brickCalculator

