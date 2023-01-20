// Ex2.2 - One and Zero - Binary
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const oneZiroBinar = arr =>{
    let numOfArr= Number(arr.join(''));
        return parseInt(numOfArr ,2);
}
console.log(oneZiroBinar(  [0, 1, 0, 1] ));


