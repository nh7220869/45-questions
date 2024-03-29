// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// with string
var Name = 'ALi';
console.log('equating string');
console.log(Name == 'Ali'); //true
console.log(Name != 'ali'); //true
//Numerical test
var number = 21;
console.log('equating numbers');
console.log(number == 21); //true
console.log(number != 10); //true
console.log(number < 5); //false
console.log(number > 21); //false
console.log(number <= 21); //true
console.log(number >= 10); //false
// test using "or & "and" operators
console.log('using and & or');
var num1 = 5;
var num2 = 10;
console.log(num1 < 6 && num2 < 10); //false
//          true      false
console.log(num1 < 6 || num2 < 10); //true
//          true      true
//test wether an item is in a array
console.log("array and is not array");
var A = ["apple", "mango", "banana"];
var B = "orange";
console.log(Array.isArray(A)); //true
console.log(Array.isArray(B)); //false
