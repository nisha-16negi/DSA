// Naive method
// function printDivisors(n) {
//   let i;
//   for (i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       console.log(i);
//     }
//   }
// }


// Efficient solution
// n=30  (1,30), (2,15), (3,10), (5,6)
// one of the value of pair will always smaller than or equal to square root of n  (_/n)
// x*y = n ,  i.e, x<=y
// x*x<=n
//x<= _/n


// without sorted order
// function printDivisors(n){
//     let i;
//     for(i=1; i*i<=n;i++){    //1,4,9,16,25,
//         if(n%i ===0){
//             console.log(i);    // 1,2,3,5
//             if(i!==n%i){         // 1,2, 
//              console.log(n/i);  // 30,15,10,6
//             }
//         }
//     }
// }


// In sorted order
function printDivisors(n) {
  let i;
  for (i = 1; i*i<= n; i++) {  //i=1,4,9,16,25
    if (n % i === 0) {
      console.log(i);   // o/p=1,2,3,5
    }
}
  for ( ; i>1; i--){  // i=5,4,3,2
    if(n%i==0){
        console.log(n/i);  // o/p=6,10,15
    }
  }
}


printDivisors(30)

