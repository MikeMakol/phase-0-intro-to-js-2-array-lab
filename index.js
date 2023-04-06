// Write your solution here!

// cats is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ['Milo', 'Otis', 'Garfield'];

// appends a cat to the end of the cats array
function destructivelyAppendCat(name = 'Ralph') {
    return cats.push(`${name}`);
}

// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name = 'Bob') {
    return cats.unshift(`${name}`);
}

// removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    return cats.pop();
}

// removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    return cats.shift();
}

// appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name = 'Broom') {
    return [...cats, `${name}`];
}

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name = 'Arnold') {
    return [`${name}`, ...cats];
}

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, -1);
}

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}