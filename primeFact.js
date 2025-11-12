function primeNum(num) {
  if (num == 1) {
    return false;
  }
  if (num == 2 || num == 3) {
    return true;
  }
  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i = i + 6) {
    while (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

// Naive method

function primeFact(n) {
  for (let i = 2; i <= n; i++) {
    if (primeNum(i)) {
      let a = i;
      while (n % a == 0) {
        console.log(i);
        a = a * i;
      }
    }
  }
}

primeFact(13);
