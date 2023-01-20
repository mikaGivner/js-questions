// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.

const trimming = str =>{
    let arr=Array.from(str);
    arr.shift()
    arr.pop();
    console.log(arr);
}

console.log(trimming('mika'));