


function reverse(input){
    let reverse = "";
    let chars = input.split("");
    let length = chars.size;
    for(let index=chars.length-1;index>=0;index--){
        reverse = reverse + chars[index];
    }
    console.log("Reversed string is: " + reverse);
   return(input===reverse);
}

console.log(reverse("palindrome"));
