// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

const notEqual = (arr) => {
  let arrSorted= arr.sort((a,b)=>a-b);
  return arrSorted[0] === arrSorted[1] ? arrSorted[arrSorted.length-1] : arrSorted[0];
}

console.log(notEqual([ 2, 3, 2 ]));
//דרך אחרת-למצב שבו יש יותר מ2 סוגים של איברים
// const notEqual = (arr) => {
//         n = arr.shift();
//         while (arr.length!==0) {
//             if (!(arr.includes(n))) return n;
//             else { 
//                 while (n === arr[0]) { arr.shift();}
//                 n = arr.shift();
//             }
//         }
//         return n;
// };