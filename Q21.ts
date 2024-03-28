// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let book: {
     name: string; 
    auther: string; 
    for: string;
    description: string;
     yearpublished: number; 
     price: number 
    } =
{
    name: "Mathematics D3",
    auther: "Dr Joseph Yeo",
    for: "Grade 6th, 7th & 8th",
    description: " Oxford university book for O-Levels cambridge designed by the standard grade wise" ,
    yearpublished: 2015,
    price:1500 

};


console.log(`Book info: ${book.name} by ${book.auther} for ${book.for} by ${book.description} published in ${book.yearpublished}with new edition & the price is ${book.price}`);



