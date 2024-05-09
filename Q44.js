// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Define a function wiith a rest parameter that accept items arguments representing our Sandwich.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n ");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow  Enjoy  Sandwich !");
}
// Calling the function 3 times with 3 different numbr of arguments
makeSandwich("Bread", "Butter");
makeSandwich("Chicken", "Cheese", "Boiled Egg", "Mayo");
makeSandwich("White bread", "Spring onion", "Spicy brown mustard", "Potato salad", "Roast Beef", "Mayo");
