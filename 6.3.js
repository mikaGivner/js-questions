// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a ="xyaabbbccccdefww"
// b ="xxxxyyyyabklmopq"
// longest(a, b) -> “abcdefklmopqwxy

const organizeStr= (s1, s2)=>{
    
   let arr= Array.from(s1+s2).sort();
   let result=arr[0];
   arr.forEach(letter=> letter!==result[result.length-1] && (result+=letter));
    
    return result;
    
};

console.log(organizeStr("abcdefghijklimnopqrstuvwxyz","abcdefghijklimnopqrstuvwxyz")); 