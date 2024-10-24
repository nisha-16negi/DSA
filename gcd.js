// Naive method
// function gcd(a,b){
//  let val = Math.min(a,b);
//  while(val >0){
//     if(b%val ==0 && a%val==0){
//         return val;
//     }
//     val--;
//  }
//  return val;
// }



// with recursion 
// function gcd(a,b){
//    if(b===0){
//     return a;
//    }
//    return gcd(b,a%b)
// }



// without recursion
function gcd(a,b){
    while(b>0){
         a = a%b;
         [a,b]=[b,a]
    }
    return a;
}

console.log(gcd(10,15));