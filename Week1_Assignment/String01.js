


function reverse(input){
    let reverse = "";
    let chars = input.split("");
    let length = chars.size;
    for(let i=chars.length-1;i>=0;i--){
        reverse = reverse + chars[i];
    }
    console.log("Reversed string is: " + reverse);
   return(input===reverse);
}

console.log(reverse("palindrome"));


