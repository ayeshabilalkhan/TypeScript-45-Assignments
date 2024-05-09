// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



// Creating a Guest List Array
let Guestlist = ["Shabana", "Rimsha", "Aqsa", "Sara"];

// Making Veriable for those Guest who can't come
let dontCome = Guestlist[0];


// Print the Name of Guest who cant come
console.log(dontCome, "Can't make it to the dinner.");

// Add or Remove Values from Guest List Array
Guestlist.splice(0, 1, "Mahnoor");

// Message Print for Bigger Table
console.log("Good News !  We have Found a Bigger Table for Dinner.");

// Adding a new Guest at starting Index of Array
Guestlist.unshift("Hasnain");

// Adding a new Guest at ending Index of Array
Guestlist.push("Ahsan");

// Adding a new Guest at middle Index of Array
let middleIndex: number = Math.floor(Guestlist.length / 2);

// Adding a new Guest to middle Index of Array
Guestlist.splice(middleIndex, 0, "Muzammil");


// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending a Invitation Message to our Guests one by one with thier names.
Guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to join me for dinner? I'd be honored to have your company.`));
//  copy paste Q.16 .. .



// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me"); 

// Using while-loop to remove guests from the array until only two names remain
while(Guestlist.length > 2){
    let removeGuest = Guestlist.pop();
    console.log(`Sorry, ${removeGuest} I cant invite you to dinner`);
}

//  Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");
Guestlist.forEach(lasttwo => console.log(`Luckly ${lasttwo}, You are still invited to dinner`));

// Removing last two Guests from the list
Guestlist.pop();
Guestlist.pop();

console.log("Empty List:", Guestlist);

