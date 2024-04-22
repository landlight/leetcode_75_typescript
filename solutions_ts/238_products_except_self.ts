/**
 *
 * @param nums
 * @returns
 * Time Constraint: O(n)
 * Space Constraint: O(n)
 */
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  let answer = Array(n).fill(1);
  let prefix = Array(n).fill(1);
  let suffix = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i++) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    answer[i] = prefix[i] * suffix[i];
  }

  return answer;
}
