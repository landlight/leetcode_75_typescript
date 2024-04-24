function maxArea(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let heightT = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, width * heightT);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
