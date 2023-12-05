/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str) {
//   let count=0;
//   for(let i=0;i<str.length;i++){
//     if(str[i]==='a'){
//       count+=1
//     }
//     else if(str[i]==='e'){
//       count+=1
//     }
//     else if(str[i]==='i'){
//       count+=1
//     }
//     else if(str[i]==='o'){
//       count+=1
//     }
//     else if(str[i]==='u'){
//       count+=1
//     }
//     else if(str[i]==='A'){
//       count+=1
//     }
//     else if(str[i]==='E'){
//       count+=1
//     }
//     else if(str[i]==='I'){
//       count+=1
//     } else if(str[i]==='O'){
//       count+=1
//     }
//     else if(str[i]==='U'){
//       count+=1
//     }
//   }
//   return count
// }

// better way to implement
function countVowels(str) {
  const vowels = new Set('aeiouAEIOU');
  let count = 0;
  for (let char of str) {
    if (vowels.has(char)) // checks if char exists in vowels
    {
      count += 1
    }
  }
  return count

}

module.exports = countVowels;