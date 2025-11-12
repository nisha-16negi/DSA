function reverseNum(num) {
  let rev = 0,
    n;
  n = Math.abs(num);
  let limit = Math.pow(2, 31); //   limit = 2**31
  if (num == 0) {
    return 0;
  }
  while (n > 0) {
    let last = n % 10;
    rev = rev * 10 + last;
    n = Math.floor(n / 10);
  }
  if (rev < -limit || rev > limit - 1) {
    // condition limit should be in range of [-2^31 , 2^31 -1]
    return 0;
  }

  return num < 0 ? -rev : rev;
}

console.log(reverseNum(1534236469));
