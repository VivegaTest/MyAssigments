function example1(str) {
   let chars = str.trim().split(" ");
   let length = chars.length;
   let lastWord = chars[length - 1];
   console.log("last word is" + lastWord.length);
}

example1("Hello world");
example1("fly me to the moon ");

function isAnagram(string1, string2) {
   let n1 = string1.length;
   let n2 = string2.length;

   if (n1 != n2) {
      return false;
   }
   let str1 = string1.trim().toLowerCase().split("").sort();
   let str2 = string2.trim().toLowerCase().split("").sort();
   for (let i = 0; i < n1; i++) {
      if (str1[i] != str2[i]) {
         return false;
      }
      return true;
   }
}
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));
