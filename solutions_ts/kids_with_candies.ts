/**
 * Time Complexity: 0(n)
 * Space Complexity: 0(n)
 *
 * @param candies
 * @param extraCandies
 * @returns
 */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
