class Solution(object):
    def bitwiseComplement(self, N):
        """
        :type N: int
        :rtype: int
        """
    
        if not N:
            return 1

        count = 0
        tmp = N

        while tmp > 0:
            tmp //= 2
            count += 1

        return 2 ** count - 1 - N

s = Solution();
print s.bitwiseComplement(10)
