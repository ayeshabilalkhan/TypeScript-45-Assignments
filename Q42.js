// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define the Function to show magicians names
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magicianName = ["David", "Alexa", "Dynamo"];
// Call make_great Function to modify magicians names
var greatMagicians = make_great(magicianName);
// Call show_magicians that show modified list of magicians 
show_magicians(greatMagicians);
