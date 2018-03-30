function print_subsets(currentList, availableItems, sum) {
    availableItems.forEach(function(element) {
        var currentListTmp = currentList.slice();
        currentListTmp.push(element);
        if (currentListTmp.reduce((a, b) => a + b, 0) == sum) {
            console.log(currentListTmp);
        } else {
            var availableItemsTmp = availableItems.slice();
            availableItemsTmp.splice(availableItems.indexOf(element), 1);
            print_subsets(currentListTmp, availableItemsTmp, sum);
        }
    });
} 

var data = [1, 4, 3, 6, 5, 2];
var k = 6;

print_subsets([], data, k);
