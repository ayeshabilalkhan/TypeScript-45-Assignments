// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var FriendsName = ["Aqsa", "Umar", "Ali", "Sara"];
FriendsName.forEach(function (message) { return console.log("Hi ".concat(message, ", How Are You?")); });
