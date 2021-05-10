function reverseString(s) {
    
    let left=0;
    let right=s.length-1;
   while(left<right){
     let temp=s[left]
     s[left]=s[right];
       s[right]=temp;
       left++;
       right--;
   }
 
  return s   
     
 };

 console.log(reverseString(["h","e","l","l","o"]))
 console.log(reverseString([1,2,3,4,5,6]))