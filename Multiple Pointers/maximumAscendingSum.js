
const maximumAscendingSum=(nums)=>{

let maxSum=0
let left=0;
let right=1
let currSum=0
while(left<nums.length){
if(nums[right]>nums[left]){
   
 currSum+=nums[left]  
}
else{
    currSum+=nums[left]
 
  if(currSum>maxSum){
maxSum=currSum
  }  
  currSum=0
}

left++
right++   
}


 return maxSum
}

console.log(maximumAscendingSum([10,20,30,5,10,50]))

