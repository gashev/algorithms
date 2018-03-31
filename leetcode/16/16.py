class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """

        tmp = sorted(nums)
        result = sum(tmp[:3])
        length = len(tmp)
        for a in xrange(length - 2):
            b = a + 1
            c = length - 1
            while (b < c):
                s = tmp[a] + tmp[b] + tmp[c]
                if abs(s - target) < abs(result - target):
                    result = s
                if s > target:
                    c -= 1;
                else:
                    b += 1
        return result

s = Solution()
print s.threeSumClosest([0, 2, 1, -3], 1)
     
