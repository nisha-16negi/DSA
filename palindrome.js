function palindrome(num) {
  let rev = 0,
    n = 0,
    ori = num;
  if (num == 0) {
    return "Palindrome number";
  }
  while (num > 0) {
    n = num % 10;
    rev = rev * 10 + n;
    num = Math.floor(num / 10);
  }
  if (rev == ori) {
    return "Palindrome number";
  } else {
    return "Not a palindrome number";
  }
}

// const result = palindrome(121);
console.log(palindrome(0));
