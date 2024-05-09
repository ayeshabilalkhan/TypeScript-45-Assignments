// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// Define Variables
let apple = "apple";
let uppercaseApple = "APPLE";
let twenty = 20;
let thirty = 30;
let fruits = ["apple", "banana", "cherry"];

// Test for equality and inequality with Strings
console.log("Is apple is equal to apple");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");


// Test using Lowercase Function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");


// Numercal tests
// Equal to.. .
console.log("\nIs twenty is equal ti thirty");
console.log(twenty == thirty);

// Not Equal to.. .
console.log("\nIs twenty is not equal ti thirty");
console.log(twenty != thirty);

// Greater than.. .
console.log("\nIs twenty is greater than zero?");
console.log(twenty > 0);

// Less than.. .
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);

// Greater than or equal to
console.log("\nIs twenty is greater than or equal to 10?");
console.log(twenty >= 10);

// Less than or equal to
console.log("\nIs thirty is less than or equal to 20?");
console.log(thirty <= 20);


// Tests using "and" & "or" Operators

// Using && (and)
console.log("\nthirty is not equal to 20 and thirty is greater than 20");
console.log(thirty != 20 && thirty > 20);

console.log("\nthirty is not equal to 20 and thirty is greater than 20");
console.log(thirty != 20 && thirty > 30);


// Using  || (OR)
console.log("\n30 is greater than 50 OR 20 is equal to 20");
console.log(30 > 50 || 20 == 20);

console.log("\n30 is greater than 50 OR 20 is not equal to 20");
console.log(30 > 50 || 20 != 20);


// Test whether an item is Include in array
console.log("\nIs cherry include in my Fruits array");
console.log(fruits.includes("cherry"));

// Not Include.. .
console.log("\nIs cherry not include in my Fruits array");
console.log(!fruits.includes("cherry"));
