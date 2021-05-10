// Problem => Write a function called SumZero which accepts a sorted arry of integers. The function should find the first pair where sum is zero. Return an array that includes both values that sum to zero.

const sumZero=(arr)=>{
let left=0;
let right=arr.length-1;
while(left<right){
    
let sum=arr[left]+arr[right]

if(sum===0){
    return [arr[left],arr[right]]
}
else if(sum>0){
right--;
}
else{
left++;
}

}
return undefined

}
console.log(sumZero([-3,-2,1,3]))
console.log(sumZero([-4,-2,6]))
console.log(sumZero([-3,-2,1,2,4]))