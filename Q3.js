//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//lower case
var personName = "Noor Ul sehar";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//titie case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
