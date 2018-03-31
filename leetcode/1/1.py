class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        size = len(nums)
        for a in xrange(size):
            number = target - nums[a]
            for b in xrange(a + 1, size):
                if nums[b] == number:
                    return [a, b]

        return None 

s = Solution()
print s.twoSum([3, 2, 4], 6)
