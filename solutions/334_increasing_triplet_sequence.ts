/**
 *
 * @param nums
 * @returns
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function increasingTriplet(nums: number[]): boolean {
  let firstSmall = Number.MAX_SAFE_INTEGER;
  let secondSmall = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < firstSmall) {
      firstSmall = nums[i];
    } else if (nums[i] < secondSmall) {
      secondSmall = nums[i];
    } else {
      return true;
    }
  }

  return false;
}
