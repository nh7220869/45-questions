//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of inviltation messages, one for each person who is still in your list.



let  invitedguest = ["Abdullah", "Abubakar", "Sehar"];
let cannotattend = "Abubakar";


invitedguest [invitedguest.indexOf(cannotattend)] = cannotattend;

for (let guest of invitedguest) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}

console.log(cannotattend + " " +"can not attend the dinner Due to some personal reason.");

let  newGuest1 = "Huda";


// Replace the guest who can't make it with a new person
invitedguest[1] = "Huda" 


// Print invitations to each person on the updated guest list

for (let guest of invitedguest) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}