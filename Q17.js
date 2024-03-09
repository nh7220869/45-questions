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
// Q17. Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people.");
// Remove guests until only two names remain
while (invitedguest.length > 2) {
    var removedGuest = invitedguest.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitations to the two remaining people
for (var _c = 0, invitedguest_4 = invitedguest; _c < invitedguest_4.length; _c++) {
    var guest = invitedguest_4[_c];
    console.log("Dear ".concat(guest, ", you are still invited to dinner. Please join us!"));
}
// Empty the list
invitedguest = [];
console.log("Final guest list:", invitedguest);
