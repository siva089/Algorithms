// Problem: Given two strings write a function to determine second string is angram of first one.An anagram is a phrase or name formed by rearranging the letters of another,such as cinema,formed by iceman.

const validAnagram=(str1,str2)=>{
if(str1.length!==str2.length)return false
let strObj2={}
for(let letter of str2){
strObj2[letter]=(strObj2[letter]||0)+1
}
// console.log(strObj2)
for(let letter of str1){
 if(strObj2[letter]){
strObj2[letter]=strObj2[letter]-1
 }
 else{
     return false
 }    
 
}

return true

}

console.log(validAnagram('',''))
console.log(validAnagram('aaz','zza'))
console.log(validAnagram('anagram','nagaram'))
console.log(validAnagram('rat','car'))
console.log(validAnagram('qwerty','qeywrt'))