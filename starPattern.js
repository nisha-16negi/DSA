let n = 5;

// *
// * *
// * * *
// * * * *
// * * * * *

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + "* ";
//   }
//   console.log(row);
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + " " + (j + 1);
//   }
//   console.log(row);
// }

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + " " + (i + 1);
//   }
//   console.log(row);
// }

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// for (let i = n; i > 0; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + " " + j;
//   }
//   console.log(row);
// }

//   (or)

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row = row + " " + j;
//   }
//   console.log(row);
// }

//              *
//           *  *
//        *  *  *
//     *  *  *  *
//  *  *  *  *  *

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - (i + 1); j++) {
//     row = row + " ";
//   }
//   for (let k = 0; k < i + 1; k++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - (i + 1); j++) {
//     row = row + " ";
//   }
//   for (let k = 0; k < i + 1; k++) {
//     row = row + "* ";
//   }
//   console.log(row);
// }

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

// for (let i = 0; i < n; i++) {
//   let row = "";
//   let value = 1;
//   for (let j = 0; j < i + 1; j++) {
//     row = row + value;
//     if (value == 1) {
//       value = 0;
//     } else {
//       value = 1;
//     }
//   }
//   console.log(row);
// }


// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

let value = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + value;
    if (value == 1) {
      value = 0;
    } else {
      value = 1;
    }
  }
  console.log(row);
}
