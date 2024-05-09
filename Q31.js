// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = ["Imran", "Muzammil", "Hasnain", "Admin", "Ahsan"];
// Updated Array..
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array in Empty We need to find some users!");
}
else {
    // Using ForEach Loop on Array..
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thank you for logging in again."));
        }
    });
}
