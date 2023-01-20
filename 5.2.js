// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const repeat_str=  (times, char) =>{
let str="";
 for(let i=0; i<times; i++){
    str+=char;
 } 
 return str;
}

console.log(repeat_str(5, "Hello"));