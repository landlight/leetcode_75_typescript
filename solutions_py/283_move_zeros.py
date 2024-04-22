class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """

        write = 0
        for i in range(0, len(nums)):
            val = nums[i]
            nums[i] = 0
            if val != 0:  # bcoz it needs to be not zero instead of positive numbers
                nums[write] = val
                write += 1
