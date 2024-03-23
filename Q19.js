// Q19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
//export from Q15
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
//Q19
console.log('n\Printing messege indicating number of guest');
console.log("we had finally invited ".concat(invitedguest.length, " guest in ex 15"));
