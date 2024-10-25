// naive method
// function lcm(a,b){
//     let val = Math.max(a,b)
//     while(val%a!==0 || val%b!==0 ){      
//         val++;
//     }
//     return val;
// }

// Efficient solution
//idea, a*b = gcd(a,b) * lcm(a,b)

function gcd(a,b){
    while(b>0){
         a = a%b;
         [a,b]=[b,a]
    }
    return a;
}

function lcm(a,b){
    return (a*b)/gcd(a,b)
}


console.log(lcm(7,6));