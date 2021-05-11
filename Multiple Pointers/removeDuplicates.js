

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another ar


const removeDuplicates=(arr)=>{
let left=0;
while(left<arr.length){
if(arr[left]===arr[left+1]){
    arr.splice(left,1)  
    left--
}
else{
    left++
}
}


return arr
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))