// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const camelCase = str =>
{
    
    for(let i=0; i<str.length; i++){

        if (!((str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122) || (str.charCodeAt(i)>=1 && str.charCodeAt(i)<=26))){
        
            let arr=str.split(str[i]);
            let arr1=arr.map(word=>  word[0].toUpperCase()+word.slice(1));
            
        return arr1.join("");
        }
    }
  
}
   
  console.log(camelCase("the-stealth-warrior"));
