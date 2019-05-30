def nextPermutation(numbers):
    size = len(numbers)

    tmp = len(numbers) - 1
    while (tmp >= 0) and (numbers[tmp - 1] > numbers[tmp]):
        tmp -= 1

    if (not tmp):
        return False

    i = tmp - 1
    tmp = size - 1
    while (tmp > i) and (numbers[tmp] < numbers[i]):
        tmp  -= 1

    j = tmp
    numbers[i], numbers[j] = numbers[j], numbers[i]

    i = i + 1
    j = size - 1
    while(i < j):
        numbers[i], numbers[j] = numbers[j], numbers[i]
        i += 1
        j -= 1

    return True

a = [1, 2, 3, 4, 5, 6]
print a

while nextPermutation(a):
    print a
