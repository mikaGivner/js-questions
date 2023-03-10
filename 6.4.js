// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// islsogram("Dermatoglyphics") ==true
// islsogram("aba") ==false
// islsogram("moOse") ==false // -- ignore letter case

const isIsogram = str =>{
let arr= Array.from(str.toLowerCase()).sort();
while(arr.length>0){
let letter= arr.shift();
if(arr.includes(letter)) return false;
}
return true;
}
console.log(isIsogram("moOse")); 