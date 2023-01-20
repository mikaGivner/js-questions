// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

const shortestWords2 =str =>(Array.from(str.split(" ")).sort((shortWord, cur)=>cur.length-shortWord.length ))[0].length;

console.log(shortestWords2("koko bambino is the best programer"));