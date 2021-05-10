
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

const intersection2=(arr1,arr2)=>{

let sArr=arr1.length>arr2.length?arr2:arr1;
let bArr=arr1.length>arr2.length?arr1:arr2;
let bArrLookup={}

bArr.forEach(el=>{
  bArrLookup[el]=(bArrLookup[el]||0)+1
})
let intersection=[]

sArr.forEach(el=>{
if(bArrLookup[el]){
    bArrLookup[el]--;
    intersection.push(el)
}
})

return intersection
}

console.log(intersection2([1,2,2,1],[2,2]))