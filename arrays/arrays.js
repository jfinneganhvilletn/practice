const jpCars = ["Suzuki", "Mitsubishi", "Honda", "Subaru"];

// call the array

// document.getElementById("demo").innerHTML = jpCars;

// can be more complex. Need to use {} instead of []

// arrays use names to access its members
//name is firstName, and member is "John"

const profileInfo = {firstName:"John", lastName:"Pizza", age: 37, hobby:"video games"};

// find the last of an array

let lastCar = jpCars[jpCars.length - 1];

// use a for loop to list an array

const pokemon = ["Bulbasaur", "Farfetch'd", "Clefairy", "Pikachu", "Psyduck"];

let pokeLen = pokemon.length;

let text = "<ul>";
for (let i = 0; i < pokeLen; i++) {
    text += "<li>" + pokemon[i] + "<li>";
}
text += "</ul>";

document.getElementById("pokeText").innerHTML = text;


// array foreEach()

let text2 = "<ul>";
pokemon.forEach(myFunction);
text += "</ul>";

document.getElementById("pokeText2").innerHTML = text2;

function myFunction(value) {
    text2 += "<li>" + value + "</li>";
}

// adding new array elements

pokemon.push("Charmander");

pokemon[pokemon.length] = "Snorlax";

pokemon[9] = "Pidgeotto"; // creates undefined holes in the array

/*
In JavaScript, arrays use NUMBERED indexes

In JavaScript, objects use NAMED indexes

You should use objects when you want the element names to be strings

You should use arrays when you want the element names to be numbers

*/


// Array Methods

const berries = ["blueberry", "blackberry", "rasberry", "strawberry", "lingenberry"];

// document.getElementById("berry").innerHTML = berries.toString();  -------- This turns the array into a string field

document.getElementById("berry").innerHTML = berries.join(" -- ") // can join array with specified separator

/* Popping and Pushing

This refers to removing or adding new elements to an array

Popping items OUT of an array

Pushing item INTO an array
*/

berries.pop(); // pops out the last entry of an array "lingenberry"

// let berryPie = berries.pop(); -- will be strawberry

// ok so now we've gotten rid of lingenberry and need to add a new one

berries.push("schnozberry"); // adds new element to the end of an array

// shifting elements
// equivalent to popping but working the first element instead of the last

berries.shift(); // blueberry dissappears

berries.unshift("cranberry");

//array indexes are accessed using their index number

berries[0] = "mulberry"; // replaces index item [0] with mulberry
 
berries[berries.length] = "Kiwi";


// how to delete items from array

delete berries[5]; // deletes kiwi since it's not a berry
//however leaves undefined holes in the array





