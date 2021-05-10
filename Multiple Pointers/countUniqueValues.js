
// Implement a function called countUniqueValues which accepts  a sorted array,and counts the unique values in the array.

const countUniqueValues=(arr)=>{

let count=0;
let left=0;
let right=1
while(left<arr.length){

    if(arr[left]!==arr[right]){
        // console.log("c")
   count++
    }
    left++
    right++
}

return count
}

console.log(countUniqueValues([1,1,1,1,2,2,3,4]))
// console.log(countUniqueValues([-2,-1,0,1,2,3,3,4,4,4,4]))
