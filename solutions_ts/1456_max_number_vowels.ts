/**
 *
 * @param s
 * @param k
 * @returns
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let left = 0;
  let right = left + k - 1;
  let sum = 0;

  for (left = 0; left < k; left++) {
    sum += vowels.has(s[left]) ? 1 : 0;
  }
  let maxVowels = sum;
  while (right < s.length) {
    sum -= vowels.has(s[left]) ? 1 : 0;
    sum += vowels.has(s[right + 1]) ? 1 : 0;
    maxVowels = Math.max(maxVowels, sum);

    if (maxVowels === k) {
      return k;
    }

    left++;
    right++;
  }

  return maxVowels;
}
