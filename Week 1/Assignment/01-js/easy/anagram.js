/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let ans1 = []
  let ans2 = []

  for (let i = 0; i < str1.length; i++) {
    ans1.push(str1.charCodeAt(i))
  }
  let sortAns1 = ans1.sort((a, b) => a - b)
  console.log(sortAns1)
  console.log(sortAns1.length);

  for (let i = 0; i < str2.length; i++) {
    ans2.push(str2.charCodeAt(i))
  }

  let sortAns2 = ans2.sort((a, b) => a - b)
  console.log(sortAns2);
  console.log(sortAns2.length);

  if (sortAns1.length == 0 && sortAns2.length == 0) {
    return true
  }

  for (let i = 0; i < sortAns1.length; i++) {
    if (sortAns1.length === sortAns2.length) {
      if (sortAns2[i] == sortAns1[i]) {
        return true
      }
    }
    return false
  }
}

module.exports = isAnagram;
