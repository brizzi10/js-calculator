var javaCalc = {
  add: function(num1, num2){
    return num1 + num2;
  },
  subtract: function(num1, num2){
    return num1 - num2;
  },
  divide: function(num1, num2){
    return num1/num2;
  },
  multiply: function(num1, num2){
    return num1 * num2;
  },
  exponent: function(num1, num2){
    return Math.pow(num1, num2);
  }
}

console.log(javaCalc.add(9, 8));
console.log(javaCalc.subtract(9, 8));
console.log(javaCalc.divide(9, 8));
console.log(javaCalc.multiply(9, 8));
console.log(javaCalc.exponent(9, 8));
