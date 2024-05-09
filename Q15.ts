// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.



let GuestList = ["Shabana", "Rimsha", "Aqsa", "Sara"];

let dontCome = GuestList[0];

console.log(dontCome, "Can't make it to the dinner.");

GuestList.splice(0, 1, "Mahnoor");

GuestList.forEach(guest => console.log(`Salam ${guest}, Would you like to join me for dinner? I'd be honored to have your company.`));

