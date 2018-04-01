class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        size = len(nums)
        data = {}
        for a in xrange(size):
            data[nums[a]] = a

        for a in xrange(size):
            if (target - nums[a] in data) and (data[target-nums[a]] != a):
                return [a, data[target - nums[a]]]
        return None

s = Solution()
print s.twoSum([3, 2, 4], 6)
