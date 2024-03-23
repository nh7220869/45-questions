//Q18
//Seeing the World: Think of at least five places in the world you’d like to visit.

//1• Store the locations in a array. Make sure the array is not in alphabetical order.

//2• Print your array in its original order.

//3• Print your array in alphabetical order without modifying the actual list.ay is still in its original order by printing it.

//4• Show that your array is still in its original order by printing it

//5• Print your array in reverse alphabetical order without changing the order of the original list.

//6• Show that your array is still in its original order by printing it again.

//7• Reverse the order of your list. Print the array to show that its order has changed.

//8• Reverse the order of your list again. Print the list to show it’s back to its original order.

//9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//10• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// step 1: original order.
console.log(" Step 1: Make a variable of beautiful places");
let beauitfullplace :string []=["Maldives", "Costa Rica","Tanzania","United States","Iceland"];

//step 2: Print your array in its original order.
console.log('Step 2:  Print array in its orignal order');
console.log(beauitfullplace);

//step 3: Print your array in alphabetical order without modifying the actual list.
console.log("\n Step 3: Alphatical order");
console.log([...beauitfullplace.sort()]);

//step 4 : show that your array is still in its original order by printing it.
console.log("\n Step 4: Showing array is still in its orignal order");
console.log (beauitfullplace);

//step 5 : Print your array in reverse alphabetical order without changing the order of the original list.
console.log(" \n Step 5: Reverse alphabetical order without modifying the actual list");
console.log([...beauitfullplace.sort().reverse()]);

//step 6: Show that you  array is still in its original order by printing it again.
console.log(" \n Step 6:  Showing array is still in its orignal order");
console.log(beauitfullplace);

//step 7: Revere the order of your list. Print the array to show that its order has changed.  
console.log("\n Step 7: reverse order") ;  
beauitfullplace.reverse();
console.log(beauitfullplace);

//step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Step 8: Back to original");
beauitfullplace.reverse();
console.log(beauitfullplace);

//step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Step 9: Change to Alphabatical order");
beauitfullplace.sort();
console.log(beauitfullplace);

////step 10:  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n Step 10:  Change to reverse alphabatical order");
beauitfullplace.sort().reverse();
console.log(beauitfullplace);




