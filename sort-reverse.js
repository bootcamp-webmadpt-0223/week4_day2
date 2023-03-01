const nums = [111, 22, 3];
const strings = ["This", "is", " a", "a", "Nice1", "string", "a", "b", "1"];
// .map(
//   (s) => s.toLowerCase()
// );

const sortedStrings = strings
  .map((s) => s.toLowerCase())
  .sort()
  .reverse();
console.log(sortedStrings);

// strings.sort((a, b) => {
//   const clearedA = a.toLowerCase();
//   const clearedB = b.toLowerCase();
//   if (clearedA > clearedB) {
//     return 1;
//   }
//   if (clearedA < clearedB) {
//     return -1;
//   }
//   return 0;
// });

// const stringsCopy = strings.map((e) => e);
// const stringsCopy = [...strings];
const stringsCopy = strings.slice(0);

stringsCopy.reverse();

console.log(strings, stringsCopy);

nums.sort((a, b) => {
  //   if (a - b > 0) {
  //     return 1;
  //   }
  //   if (a - b < 0) {
  //     return -1;
  //   }
  //   return 0;
  //   if (a === 2) {
  //     return 1;
  //   }
  //   if (b === 2) {
  //     return -1;
  //   }
  return b - a;
});

console.log(nums);
