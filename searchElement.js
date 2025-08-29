/* write a function that searches for an element in an array and
returns the index, if element not present just return -1 */

function searchElement (arr, n){
let i=0;
let length=arr.length;
    while(i<length){
         if(arr[i]!=n){
            i++
         }
         else{
            return i;
         }
    }
    return -1;

}

let arr = [4,7,12,1,83,9];
let index=searchElement(arr, 2);
console.log(index);