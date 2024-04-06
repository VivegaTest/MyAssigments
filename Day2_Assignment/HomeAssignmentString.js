/**
 * Assignment Details:
Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
Assignment Requirements:
Example:1
1. Split the string into an array of words.
2. Find the last word in the array.
3. Calculate the length of this word.
Example:2
1. Trim the String
2. Split the String into Words
3. Identify the Last Word
4. Calculate the Length of the Last Word
5. Return the length
Example:3
1. Remove spaces and convert all letters to the same case
2. Sort the Characters
3. Compare Sorted Strings
4. Return the Result
 */

function findLastWord(str) {
    let word = str.trim().split(" ");
    let strlen = lastword.length;
    console.log("last word is", word[strlen - 1]);
    console.log("Length last word is", word[strlen - 1].length);
 }
 
 findLastWord("Hello world");
 findLastWord("fly me to the moon ");
 
 function isAnagram(str1, str2) {
    let str1 = str1.trim().toLowerCase().split("").sort().join();
    let str2 = str2.trim().toLowerCase().split("").sort().join();
      if (str1 === str2) {
       console.log( "They are anagrams");
    }
    else
       console.log("They are not anagrams");
 }
 isAnagram('hello', 'world');