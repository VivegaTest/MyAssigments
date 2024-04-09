

function isPalindrome(input){
    let reverse = "";
    let chars = input.trim().split("");
    let length = chars.length;
    for(let i=chars.length-1;i>=0;i--){
        reverse = reverse + chars[i];
    }
    console.log("Reversed string is: " + reverse);
   return(input===reverse);
}

console.log(isPalindrome("palindrome"));
