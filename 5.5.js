// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F6.6

const initials = (name) =>{
    arrName=name.split(" ").map(letter=>letter[0].toUpperCase());
    return arrName.join(".");
}

console.log(initials("mika givner")); 
console.log(initials("Sam Harris")); 
console.log(initials("Patrick Feeney")); 
