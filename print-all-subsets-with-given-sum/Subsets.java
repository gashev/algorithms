import java.util.ArrayList;

public class Subsets {
    public static void printSubsets(
        ArrayList<Integer> currentList,
        ArrayList<Integer> availableItems, 
        int sum) {
        for (Integer i = 0; i < availableItems.size(); i++) {
            Integer item = availableItems.get(i);
            ArrayList<Integer> currentListTmp = new ArrayList<Integer>(currentList);
            currentListTmp.add(item);

            int currentSum = 0;
            for (Integer d: currentListTmp) {
                currentSum += d;
            }

            if (currentSum == sum) {
                System.out.println(currentListTmp);
            } else {
                ArrayList<Integer> availableItemsTmp = new ArrayList<Integer>(availableItems);
                availableItemsTmp.remove(availableItemsTmp.get(i));
                printSubsets(currentListTmp, availableItemsTmp, sum); 
            }
        }
    }

    public static void main(String args[]) {
        int[] items = {1, 4, 3, 6, 5, 2};
        int k = 6;
        
        ArrayList<Integer> empty = new ArrayList<Integer>();
        ArrayList<Integer> data = new ArrayList<Integer>();
        for (int id: items) {
            data.add(id);
        }
        printSubsets(empty, data, k);
    }
}
