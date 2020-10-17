class Solution {
    public static int[] twoSum(int[] numbers, int target) {
        for (int index = 0; index < numbers.length - 1; index++) {
            int start = index + 1;
            int end = numbers.length - 1;
            while (start <= end) {
                int idx = (int)((start + end) / 2);
                int curSum = numbers[index] + numbers[idx];
                if (curSum == target) {
                    return new int[]{index + 1, idx + 1};
                } else if (curSum < target) {
                    start = idx + 1;
                } else {
                    end = idx - 1;
                }
            }
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        int[] result = Solution.twoSum(new int[] {2,3,4}, 6);
        System.out.println(result[0] + " " + result[1]);
    }
}