// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



// Define a Function to print each magician name from an array..
function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}


// Define an array containing magicians name
let magicianName = ["David", "Alexa", "Dynamo"]


// Call the Function to print each magician name
show_magicians(magicianName);
