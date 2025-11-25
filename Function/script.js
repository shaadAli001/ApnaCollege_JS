// Function

// function myFunction(params) {
//   console.log(`Hello ${params}`);
// }
// myFunction("Shaad");

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 5));

// const combine = (str1, str2) => {
//   return str1.concat(str2);
// };
// console.log(combine("hello", "world"));

// function vowels(str) {
//   let count = 0;
//   let lowerStr = str.toLowerCase();
//   for (let i = 0; i < lowerStr.length; i++) {
//     if (
//       lowerStr[i] == "a" ||
//       lowerStr[i] == "e" ||
//       lowerStr[i] == "i" ||
//       lowerStr[i] == "o" ||
//       lowerStr[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowels("SHAAD ALI HOW ARE YOU"));

/*ForEach*/
// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.forEach((val)=>{
//   console.log(val*val);
// });

// arr.forEach((val) => {
//   // if (typeof(val)!="number") {
//   //   console.log('its must be a number');

//   //   return false;
//   // }
//   console.log(val);

// });

// Map Method (Returns a new array)

// let arr = [12, 334, 56, 87];
// let squareArray = arr.map((val) => {
//   return val * val;
// });
// console.log(squareArray);
// console.log(arr);

// Filter Method filter elements in array

// let arr = [12, 23, 347, 561, 785, 90];
// let even = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(even);
// console.log(arr);

// Reduce Method
// let arr = [12, 23, 21, 56, 65, 89, 98];
// let output = arr.reduce((prev, curr) => {
//   // return prev > curr ? prev : curr;
//   // return (prev+curr)/10;
// });
// console.log(output);

// Q1
// let marks = [85, 92, 94, 34, 78, 99];
// let score = marks.filter((val) => {
//   return val > 90;
// });
// console.log(score);

let num = prompt("Enter Your Limit");
let arr = [];
for (let i = 1; i <= num; i++) {
  arr.push(i);
}
console.log(arr);

let sum = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(`Sum of Array = ${sum}`);

let product = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log(`Product of Array = ${product}`);
