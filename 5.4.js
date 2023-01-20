// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

const toWeirdCase= str =>{
 let str1="";
 Array.from(str.split(" ")).forEach(x => {
   for(let i=0; i<x.length; i++) i%2===0 ? str1+=x[i].toUpperCase() : str1+=x[i].toLowerCase();
   str1+=" ";
 });
 return str1;
 
}

console.log(toWeirdCase("Weird string case"));



