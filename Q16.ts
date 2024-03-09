//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

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





// Announce the bigger dinner table
console.log("Wow guys! I've a Good news, We found a bigger dinner table.");

// Add three new guests
invitedguest.unshift("Eshaal"); // Add to the beginning
invitedguest.splice(2, 0, "Ahad"); // Add to the middle
invitedguest.push("Qamar"); // Add to the end

// Print invitations to each person on the final guest list
for (let guest of invitedguest) {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}





















