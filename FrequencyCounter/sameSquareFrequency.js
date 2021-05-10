

const same=(arr1,arr2)=>{
 if(arr1.length!==arr2.length)return false   
let objArr2={}
for(let i=0;i<arr2.length;i++){
objArr2[arr2[i]]=objArr2[arr2[i]]? objArr2[arr2[i]]+1:1
}
for(let i=0;i<arr1.length;i++){
let valueToFind=arr1[i]*arr1[i]
if(objArr2[valueToFind]){
objArr2[valueToFind]=objArr2[valueToFind]-1
}
else{
    return false
}
}
return true
}

console.log(same([1,2,3,4,2],[4,9,16,1,4]))