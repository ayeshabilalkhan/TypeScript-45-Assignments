// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



// Array of Current Users
let currentUsers = ["Umar", "Hamza", "talha", "Zohaib", "Hammad"]

// Array of New Users..
let newUsere = ["Kashif", "Saad", "Talha", "Arham", "Hammad"]

// Loop through newUsers to check for usernames avaibility
newUsere.forEach(newoneUser => {

    // Making a Condition for usernames already exist and save in our-condition variable
    let ourCondition = currentUsers.some(currentoneUser => currentoneUser.toLowerCase() === newoneUser.toLowerCase())

    // Print Different message using If-Else statements
    if (ourCondition){
        console.log(`Sorry ${newoneUser} is already taken !`)
    }else{
        console.log(`This Username ${newoneUser} is available`)
    }
})
