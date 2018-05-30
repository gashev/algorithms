Given an integer x and an array nums of N integers, design algorithm to determine all unique elements a, b in array, such that a + b == x.

Solution:

    sorting the array (O(n log n))
    iterating it's elements (O(n)) while in each iteration binary searching (O(log n)) of the current element.

