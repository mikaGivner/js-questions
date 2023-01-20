// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const shortestWords =str =>(Array.from(str.split(" ")).sort((shortWord, cur)=>shortWord.length-cur.length ))[0].length;
    


console.log(shortestWords("koko bambino is the best programer"));