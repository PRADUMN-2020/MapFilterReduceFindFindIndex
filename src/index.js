//1 Map -Create a new array by doing something with each item in an array.

//2 Filter - Create a new array by keeping the items that return true.

//3 Reduce - Accumulate a value by doing something to each item in an array.

//4 Find - find the first item that matches from an array.

//5 FindIndex - find the index of the first item that matches.

// 1 Map

// const newArray = numbers.map(function (x) {
//   return x * 2;
// });

// const newArray=[];

// numbers.forEach(function(num)
// {
// newArray.push(num*2);
// });

// console.log(newArray);

// 2 Filter

// const newArray= numbers.filter(function (num) {
//   return num>10;
// });

// console.log(newArray);

// const newArray = [];

// numbers.forEach(function (num) {
//   if (num > 10) {
//     newArray.push(num);
//   }
// });

// console.log(newArray);

// 3 Reduce

// var sum = 0;

// numbers.forEach(function (num) {
//   sum += num;
// });

// console.log(sum);

// const ans = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

// console.log(ans);

// 4 Find

// const ans=numbers.find(function(num)
// {
//   return num>10;
// });

// console.log(ans);

// 5) FindIndex

// var numbers = [2, 3, 56, 48, 5];

// var ans=numbers.findIndex(function(num){
//   return num>10;
// });

// console.log(ans);
import emojipedia from "./emojipedia";

// console.log(emojipedia);

const strs = emojipedia.map(function (obj) {
  return obj.meaning.substring(0, 100);
});

console.log(strs);
