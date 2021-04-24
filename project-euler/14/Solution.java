class Solution {
	static int getSequenceLength(long num) {
		int length = 1;

		while (num > 1) {
			if (num % 2 == 0) {
				num = num / 2;
			} else {
				num = 3 * num + 1;
			}
			length++;
		}

		return length;
	}

	public static void main(String[] args) {
		int maxLength = 0;
		int num = 0;
		int len;
		
		for (int i = 1; i <= 1000000; i++) {
			len = getSequenceLength(i);
			if (len > maxLength) {
				maxLength = len;
				num = i;
			}
		}

		System.out.printf("num = %d length = %d\n", num, maxLength);
	}
}
