//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var Usernames = ["Admin", "Abdullah", "Sehar", "Huda", "Eshal", "Ahad"];
for (var A = 0; A = Usernames.length; A++) {
    if (Usernames[A] === "Admin") {
        console.log(' Hello admin would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(Usernames[A], " thank you for logging in again!"));
    }
}
// let UserNames: string[] = ["Abubakar","Abdullah", "Sehar", "Huda",        "Eshal", "Ahad"];
// //make a loop
// for(let i = 0; i < UserNames.length; i++)
// {
//     if (Usernames[i]== "Admin")
//     {
//      console.log(`\n Hello ${UserNames[i]} would you like to see a status report?\n`)
//     }
//     else 
//     {
//       console.log(`Hello ${UserNames[i]} thank you for logging in again!`)
//     }
//   }  
