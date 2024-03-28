// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var book = {
    name: "Mathematics D3",
    auther: "Dr Joseph Yeo",
    for: "Grade 6th, 7th & 8th",
    description: " Oxford university book for O-Levels cambridge designed by the standard grade wise",
    yearpublished: 2015,
    price: 1500
};
console.log("Book info: ".concat(book.name, " by ").concat(book.auther, " for ").concat(book.for, " by ").concat(book.description, " published in ").concat(book.yearpublished, "with new edition & the price is ").concat(book.price));
