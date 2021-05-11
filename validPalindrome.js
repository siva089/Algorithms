// 125. Valid Palindrome
// Easy

// 1975

// 3834

// Add to List

// Share
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.


const validPalindrome=(str)=>{
let regex=/[^a-z0-9]/gi
let validStr=str.replace(regex,"")
let strArr=validStr.toLowerCase().split("")
let left=0;
let right=strArr.length-1;
while(left<right){
let temp=strArr[right]
strArr[right]=strArr[left]
strArr[left]=temp

    left++;
    right--;
}
console.log(strArr)
return strArr.join("")===validStr.toLowerCase()
}

console.log(validPalindrome("A man, a plan, a canal: Panama"))