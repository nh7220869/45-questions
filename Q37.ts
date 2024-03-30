/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */

function make_shirt(size:string ,text:string ){
    console.log(`Make a ${size} shirt and print ${text}` )
}
make_shirt('large', 'I love typescript')
make_shirt('medium', 'I love typescript')
make_shirt('small', 'I love python')