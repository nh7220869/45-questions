// Q19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.

//export from Q15

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






//Q19

console.log('n\Printing messege indicating number of guest');
console.log(`we had finally invited ${invitedguest.length} guest in ex 15`);


