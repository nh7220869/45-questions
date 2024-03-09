//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var invitedguest = ["Abdullah", "Abubakar", "Sehar"];
var cannotattend = "Abubakar";
invitedguest[invitedguest.indexOf(cannotattend)] = cannotattend;
for (var _i = 0, invitedguest_1 = invitedguest; _i < invitedguest_1.length; _i++) {
    var guest = invitedguest_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
console.log(cannotattend + " " + "can not attend the dinner Due to some personal reason.");
var newGuest1 = "Huda";
// Replace the guest who can't make it with a new person
invitedguest[1] = "Huda";
// Print invitations to each person on the updated guest list
for (var _a = 0, invitedguest_2 = invitedguest; _a < invitedguest_2.length; _a++) {
    var guest = invitedguest_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
// Announce the bigger dinner table
console.log("Wow guys! I've a Good news, We found a bigger dinner table.");
// Add three new guests
invitedguest.unshift("Eshaal"); // Add to the beginning
invitedguest.splice(2, 0, "Ahad"); // Add to the middle
invitedguest.push("Qamar"); // Add to the end
// Print invitations to each person on the final guest list
for (var _b = 0, invitedguest_3 = invitedguest; _b < invitedguest_3.length; _b++) {
    var guest = invitedguest_3[_b];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
