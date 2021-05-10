// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


const squaresOfSortedArray=(arr)=>{
 let result=[]
let left=0;
let right=arr.length-1;

while(left<=right){
let leftMultiple=arr[left]*arr[left]
let rightMultiple=arr[right]*arr[right]

if(leftMultiple>rightMultiple){
result.push(leftMultiple);
left++
}
else{
 result.push(rightMultiple)   
right--
}



}

 return result.reverse
}

console.log(squaresOfSortedArray([-4,-1,0,3,10,11]))

