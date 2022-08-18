/* OPTIONS 1 */

function oddOrEven(num) {
  let total = 0;
  numToSt = num.toString().split("");

  for (let i = 0; i < numToSt.length; i++) {
    total += parseInt(numToSt[i]);
  }
  
  console.log(total, total % 2);

  const result1 = total % 2 == !0 ? "odd" : "even";

  console.log(`the number is ${result1}`);
}
oddOrEven(43);

/* OPTIONS 2 */

// const otherOddOrEven = (num = 12) => {
//   return String(num)
//     .split("")
//     .reduce((acc, curr) => {
//       return acc + Number(curr);
//     }, 0);
// };

// console.log(otherOddOrEven(), otherOddOrEven() % 2);

// const result2 = otherOddOrEven() % 2 == !0 ? "odd" : "even";

// console.log(`the number is ${result2}`);
