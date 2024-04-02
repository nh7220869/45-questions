/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */

const magicianNames: string[] = ["Houdini", "Derren Brown", "Penn Jillette","David Copperfield", "Teller"];


function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (const magician of magicians) {
      console.log(magician);
    }
  }

  show_magicians(magicianNames);
  function make_great(magicians: string[]): void {
    for (let A = 0; A < magicians.length; A++) {
      magicians[A] = magicians[A] + " the Great";
    }
  }


  make_great(magicianNames);

  show_magicians(magicianNames);
