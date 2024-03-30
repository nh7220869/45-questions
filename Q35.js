/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */
var animalname = ['dog', 'rabbit', 'cat'];
for (var _i = 0, animalname_1 = animalname; _i < animalname_1.length; _i++) {
    var AnimalsName = animalname_1[_i];
    console.log("A ".concat(AnimalsName, " would make a great pet!"));
}
console.log(' Any of these animals would make a great pet!');
