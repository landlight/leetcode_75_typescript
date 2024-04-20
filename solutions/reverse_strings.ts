/***
 * Given an input string s, reverse the order of the words.
 * Time Complexity: 0(n)
 * Space Complexity: 0(n)
 * Original Implementation
 */
function reverseWords(s: string): string {
  const resultArray = s.replace(/\s+/g, " ").trim().split(" ");

  let s2 = "";
  for (let i = resultArray.length - 1; i >= 0; i--) {
    if (i != 0) {
      s2 += resultArray[i] + " ";
    } else {
      s2 += resultArray[i];
    }
  }
  return s2;
}

function reverseWordsShortened(s: string): string {
  const words = s.replace(/\s+/g, " ").trim().split(" ");
  return words.reverse().join(" ");
}
