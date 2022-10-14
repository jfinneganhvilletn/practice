/* goal at the end is to make the bubbles show up

Time to learn about loops

*/

// source - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

// For...of loops

const cats = ["Aster", "Mallie", "Nora", "Spot", "CJ", "Bandit", "Sprinkles"];

for (const cat of cats) {
    console.log(cat);
}

// says for every cat within cats array, log cat into the console, and repeat until complete

// map() and filter()

// can use map() to something to each item in a collection and create a new collection

function toUpper(string) {
    return string.toUpperCase();
}

const catBreeds = ["Leopard", "Cheetah", "Jaguar", "Tiger", "Caracal"];

const upperCats = catBreeds.map(toUpper);

console.log(upperCats);

// map() passes/maps the now upper  case items into a new array called upperCats

// can use filter() to test each item in a collection, and create a new collection containing only matching items

//use same const cats at the top

function sCat(cat) {
    return cat.startsWith('S');
}

const filterCats = cats.filter(sCat);

console.log(filterCats);
// should now be an array with Spot and Sprinkles

// standard for loop

// for loop syntax

/*

for (initializer: condition; final-expression) {
    //code to run;
}

start with keyword for

within the parentheses we have three items

    1 - an initializer - usually a variable set to a number, also called counter variable

    2 - condition - defines when the loop should stop looping. usually feature comparison operator, testing to see if exit condition is met

    3 - final-expression - always evaluated each time the loop has gone through an iteration

end with some curly braces {} and each iteration it will run the code within the curly braces

*/

// can rewrite out our cat loop with a for loop

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

// for arrays its best to use for of if possible

// however it has its place, for example

let myFavoriteCats = "My favorite cats include ";

for (cat of cats) {
    myFavoriteCats += `${cat}, `
}

console.log(myFavoriteCats);

// can use a for loop to signal the last cat and finish the sentence accordingly

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length -1) {
        myFavoriteCats += `and ${cats[i]}.`
    } else {
        myFavoriteCats +=  `${cats[i]}, `
    }
}

console.log(myFavoriteCats);

// how to exit loops with a break

// if you want to exit the loop before all the iterations have been completed, you can use the break statement

