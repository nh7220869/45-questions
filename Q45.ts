/*ars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */
function Car_Information ( manufacturer:string, modle:string, color:string, year:number ){
    console.log(`manufacturer: ${manufacturer}, Modle: ${modle}, Color: ${color}, Year: ${year}`)
}
Car_Information('Toyota', 'Camry', 'Blue',2022)

 