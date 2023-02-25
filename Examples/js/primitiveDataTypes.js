// console.log will output anything 
// you put in the parentheses
// to the Chrome Developer Tools' Console

// Data Type: String (text)
console.log("Hello World!");

// Data Type: Number
console.log(4);
console.log(10000);

// Math operator
// addition (+), subtraction (-)
// multiplication (*), division (/)
console.log(10 + 5);
console.log(20 - 12);
console.log(3 * 12);
console.log(10 / 2);

// String operator
// concatenation (+) (putting two strings together)
console.log("Hello" + "World")

// Date Type: Boolean (true/false)
console.log(true);
console.log(false);

//Boolean operators
//equivalence (==) (is equal to)
console.log(10 == 10);
console.log(10 == 5);

//not equivalent (!=) (is not equal to)
console.log(5 != 15); //true
console.log(5 != 5); //false

// less than (<)
console.log(5 < 10); //true
console.log(10 < 5); //false
console.log(5 < 5); //false

// greater than (>)
console.log(5 > 10); //false
console.log(10 > 5); //true
console.log(5 > 5); //false

// greater than or equal to (>=)
// less than or equal to (<=)
console.log(5 >= 10); //false
console.log(10 >= 5); //true
console.log(5 >= 5); //true
console.log(5 <= 10); //true
console.log(10 <= 5); //false
console.log(5 <= 5); //true

// Boolean data types allow us to
// write branching code paths
if (true) {
    console.log("This statement is true!");
} else {
    console.log("This statement is false");
}