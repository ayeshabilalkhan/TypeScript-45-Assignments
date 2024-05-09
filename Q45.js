// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Define a function to create a car object with optional options...
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize an empty object to store car information
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Iterate over the options array and add key-value pairs to the car object
    options.forEach(function (option) {
        // Split the option string into key and value
        var _a = option.split(":"), key = _a[0], value = _a[1];
        // Trim whitespace from key and value, then add to the car object
        car[key.trim()] = value.trim();
    });
    // Return the car object
    return car;
}
// Call the function to create a car object
var my_car = createCar("Range Rover", "Range Rover Sport", "color: Silver", "year: 2024");
// Print the car object to the console
console.log(my_car);
