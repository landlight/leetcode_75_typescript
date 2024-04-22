class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """

        for i in range(0, len(flowerbed)):
            if flowerbed[i] != 1:
                emptyLeft = i == 0 or flowerbed[i - 1] == 0
                emptyRight = i == len(flowerbed) - 1 or flowerbed[i + 1] == 0

                if emptyLeft and emptyRight:
                    flowerbed[i] = 1
                    n = n - 1
                    if n == 0:
                        return True
                    i = i + 1

        return False
