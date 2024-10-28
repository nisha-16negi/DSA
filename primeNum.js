// Naive Method
// function primeNum(num) {
//   if (num == 1) {
//     return "Not a prime number!";
//   }
//   for (let i = 2; i < num; i++) {
//     while (num % i == 0) {
//       return "Is not a prime number!";
//     }
//   }
//   return "Is a prime number!";
// }

//efficent method
// x<= squareRoot(n)

// function primeNum(num) {
//   if(num == 1){
//     return "Not a prime number!"
//   }
//   for (let i = 2; i*i <= num; i++) {
//     while (num % i == 0) {
//       return "Is not a prime number!";
//     }
// }
// return "Is a prime number!";
// }

//more effient method
//starts from 5 and till i*i <=num and skip 2's and 3's multiples

function primeNum(num) {
  if (num == 1) {
    return "Not a prime number";
  }
  if (num == 2 || num == 3) {
    return "Is a prime number";
  }
  if (num % 2 == 0 || num % 3 == 0) {
    return "Not a prime number";
  }
  for (let i = 5; i * i <= num; i = i + 6) {
    while (num % i == 0 || num % (i + 2) == 0) {
      return "Is not a prime number!";
    }
  }
  return "Is a prime number!";
}
console.log(primeNum(11));
