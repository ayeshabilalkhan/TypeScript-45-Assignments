"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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
let middleIndex = Math.floor(Guestlist.length / 2);
// Adding a new Guest to middle Index of Array
Guestlist.splice(middleIndex, 0, "Muzammil");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending a Invitation Message to our Guests one by one with thier names.
Guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to join me for dinner? I'd be honored to have your company.`));
