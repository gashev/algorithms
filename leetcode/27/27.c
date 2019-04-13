#include <stdio.h>

int removeElement(int* nums, int numsSize, int val) {
    int loopIndex = -1;
    int removeCount = 0;
    int i;

    for (i = 0; i < numsSize; i++) {
        if (nums[i] != val) {
            loopIndex++;
            if (removeCount == 0) { 
                continue;
            }
            nums[loopIndex] = nums[i];
        } else {
            removeCount++;
        }
    }
    return numsSize - removeCount;
};

int main(void) {
    int arr[] = { 0, 1, 3, 3, 4, 5, 3, 7 };
    int newSize = removeElement(arr, 8, 3);

    int i;

    for (i = 0; i < newSize; i++){
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}
