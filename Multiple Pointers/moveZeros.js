
// 283. Move Zeroes
// Easy

// 5492

// 170

// Add to List

// Share
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


const moveZeros=(arr)=>{
    let left=0
    let right=0;

    while(left<arr.length){
        
       if(arr[left]!==0){
let temp=arr[right]
arr[right]=arr[left]
       arr[left]=temp 
           right++

       
       }
        
        left++
        
    }
    
return arr
}

console.log(moveZeros([0,1,0,3,12]))
console.log(moveZeros([0,0,1]))















// const moveZeros=(nums)=>{
//     let  left = 0;
//     var right = 0;
//     while(left < nums.length){
//           if(nums[left] !== 0){
//               var temp =  nums[right] 
//               nums[right] = nums[left]
//               nums[left] = temp
//              right++
//             }
//         left++
//     }
//     return nums
// }

// console.log(moveZeros([0,1,0,3,12]))
// console.log(moveZeros([0,0,1]))