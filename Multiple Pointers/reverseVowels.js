// 345. Reverse Vowels of a String
// Easy

// 1034

// 1490

// Add to List

// Share
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

const reverseVowels=(s)=>{

let arr=s.split("")
let left=0;
let right=arr.length-1;
while(left<right){
if(arr[left]&&arr[left].match(/[aeiou]/gi)){
if(arr[right]&&arr[right].match(/[aeiou]/gi)){
let temp=arr[right]
arr[right]=arr[left]
arr[left]=temp
left++
right--
}
else{
    right--
}    


}
else{
    left++;
}
}

return arr
       }

       console.log(reverseVowels("leetcode"))