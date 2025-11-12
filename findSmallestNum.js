function findSmallestNumber(arr){
let smallestNum = Infinity;
 for(let i=0; i<arr.length;i++){
    if(arr[i]<smallestNum){
        smallestNum=arr[i];
    }
 }
 return smallestNum;
}

let arr = [-13,8,10,22,11,18];
let result = findSmallestNumber(arr);
console.log(result);