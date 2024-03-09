
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







// Q17. Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people.");

// Remove guests until only two names remain
while (invitedguest.length > 2) {
  const removedGuest = invitedguest.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitations to the two remaining people
for (let guest of invitedguest) {
  console.log(`Dear ${guest}, you are still invited to dinner. Please join us!`);
}

// Empty the list
invitedguest = [];
console.log("Final guest list:", invitedguest);