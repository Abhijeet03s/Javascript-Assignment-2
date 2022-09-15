// - Create an empty set

let set = new Set();
console.log(set);

// - Create a set containing 0 to 10 using loop

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let loop = new Set(numbers)
for (let i of numbers) {
    console.log(i);
}

// - Remove an element from a set

let num = [1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 8, 4, 5, 3]
let removeNum = new Set(num)
console.log(removeNum.delete(2)); // true
console.log(removeNum.has(2));    // false

// - Clear a set

let words = ["Hello", "World", "Everyone", "How", "are", "you"]
let clearSet = new Set(words)
clearSet.clear()
console.log(clearSet);


// - Create a set of 5 string elements from array

let array = ["Hello", "World", "Everyone", "How", "are"];
let string = new Set(array);
console.log(string);


// - Create a map of countries and number of characters of a country

let countries = new Map()
countries.set(0, "India")
countries.set(1, "Nepal")
countries.set(2, "Japan")
countries.set(3, "Korea")

console.log(countries);




