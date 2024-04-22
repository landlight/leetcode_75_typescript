/**
 *
 * @param s
 * @returns
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function reverseVowels(s: string): string {
  let start = 0;
  let end = s.length - 1;
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const characters = Array.from(s);
  while (start < end) {
    while (start < end && !vowels.has(characters[start])) {
      start++;
    }
    while (start < end && !vowels.has(characters[end])) {
      end--;
    }

    if (start < end) {
      let temp = characters[start];
      characters[start] = characters[end];
      characters[end] = temp;
      start++;
      end--;
    }
  }
  return characters.join("");
}
