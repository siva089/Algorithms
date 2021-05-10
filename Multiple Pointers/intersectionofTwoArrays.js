// // Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

const intersection=(arr1,arr2)=>{
const seenSet=new Set()
const interSectionSet=new Set()

arr1.forEach(el=>{
seenSet.add(el)
})

arr2.forEach(el=>{
if(seenSet.has(el)){
    interSectionSet.add(el)
}
})

return [...interSectionSet]

}

var intersection1 = function(nums1, nums2) {
    const seenSet = new Set();
    const intersectionSet = new Set();
    let result = [];
    nums1.forEach(num => seenSet.add(num));
    nums2.forEach(num => {
        if (seenSet.has(num)) {
            intersectionSet.add(num);
        }
    })
    // intersectionSet.forEach(num => { result.push(num) });
    
    return [...intersectionSet];
};
console.log(intersection([1,2,2,1],[2,2]))

