// O(m+m) time complexity , O(m) space complexity
// function mergeSortedArr(num1, m, num2, n) {
//   let ncpy = num1.slice(0, m);
//   let p1 = 0,
//     p2 = 0;

//   for (let i = 0; i < m + n; i++) {
//     if (p2 >= n || (p1 < m && ncpy[p1] <= num2[p2])) {
//       num1[i] = ncpy[p1];
//       p1++;
//     } else {
//       num1[i] = num2[p2];
//       p2++;
//     }
//   }

//   return num1;
// }

function mergeSortedArr(num1, m, num2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;
    if (num1[p1] > num2[p2] && p1 >= 0) {
      num1[i] = num1[p1];
      p1--;
    } else {
      num1[i] = num2[p2];
      p2--;
    }
}
return num1;
}

console.log(mergeSortedArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
