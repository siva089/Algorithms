// 925. Long Pressed Name
// Easy

// 988

// 182

// Add to List

// Share
// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

 

// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
// Example 3:

// Input: name = "leelee", typed = "lleeelee"
// Output: true
// Example 4:

// Input: name = "laiden", typed = "laiden"
// Output: true
// Explanation: It's not necessary to long press any character.
 

const longPressedName=(name,typed)=>{
    name=name.split("")
    typed=typed.split("")
    let left=0;
    let right=0
    let lastValid=""
   let str="" 
    while(left<typed.length){
        // console.log(longPressedName("saeed","ssaaedd"))
if(typed[left]===name[right]){
    lastValid=typed[left]  
    str+=lastValid
    left++
    right++

}
else{
if(typed[left]===lastValid){
    left++
}
else{
    return false
}
}

    }

if(str!==name.join(""))return false

    return true
}

console.log(longPressedName("vtkgn","vttkgnn"))
console.log(longPressedName("saeed","ssaaedd"))
console.log(longPressedName("alex","aaleexeex"))
console.log(longPressedName("alexd","ale"))

