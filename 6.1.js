const mumbling = str =>{
    let str2=""
    for(let i=0; i<str.length; i++){
        for(let j=0; j<=i; j++)  j===0 ? str2+=str[i].toUpperCase() : str2+=str[i].toLowerCase();
        
       if(i!==str.length-1) str2+="-";
    }
    return str2;
}
console.log(mumbling("cwAt"));