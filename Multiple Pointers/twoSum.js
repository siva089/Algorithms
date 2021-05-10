

const twoSum=(arr,target)=>{
let left=0;
let right=arr.length-1;
while(left<right){
  let sum=arr[left]+arr[right]
  if(target===sum) return [left+1,right+1]
  if(sum>target){
right--;
  }
  else{
      left++
  }
  
}
return undefined
}


console.log(twoSum([2,2,3,7,11,15],9))