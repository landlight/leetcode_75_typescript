/***
 * Time Complexity: 0(m + n)2 if we use array instead of string will change the time complexity to 0(m + n)
 * Space Complexity: 0(m + n)
 ***/

function mergeAlternately(word1: string, word2: string): string {
  if (!word1) {
    return word2;
  }
  let word = "";
  for (let i = 0; i < word1.length; i++) {
    word += word1[i];
    if (word2[i]) {
      word += word2[i];
    }
  }
  if (word2.length > word1.length) {
    word += word2.slice(word1.length, word2.length);
  }
  return word;
}
