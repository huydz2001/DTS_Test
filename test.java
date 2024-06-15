import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class test {

    public Random random = new Random();

    // Hợp nhất các mảng
    private String[] merge(String[] arr, String[] left, String[] right) {
        int i = 0, j = 0, k = 0;

        while (i < left.length && j < right.length) {
            if (left[i].compareTo(right[j]) <= 0) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }

        // Thêm các phần tử còn lại vào mảng
        while (i < left.length) {
            arr[k++] = left[i++];
        }
        while (j < right.length) {
            arr[k++] = right[j++];
        }

        return arr;
    }

    // Chuyển list sang array string
    private static String[] toStringArray(List<String> list) {
        String[] array = new String[list.size()];
        for (int i = 0; i < list.size(); i++) {
            array[i] = list.get(i);
        }
        return array;
    }

    // Generate kí tự theo độ dài từ
    public String randomString(int n) {
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder result = new StringBuilder(n);

        for (int i = 0; i < n; i++) {
            result.append(characters.charAt(random.nextInt(characters.length())));
        }
        return result.toString();
    }

    // Generate dãy từ theo số lượng từ
    public String[] generateStrings(int length) {
        String[] result = new String[length];
        for (int i = 0; i < length; i++) {
            result[i] = randomString(random.nextInt(5) + 1);
        }

        return result;
    }

    // In dãy
    public void printArray(String[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    // Sắp xếp nổi bọt - Buble Sort
    public String[] bubbleSort(String[] arr) {
        int i, j;
        String temp;
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr.length - i - 1; j++) {
                if (arr[j].compareTo(arr[j + 1]) > 0) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    // Sắp xếp chọn - Selection Sort
    public String[] selectionSort(String[] arr) {
        int i, j, minIndex;
        String temp;
        for (i = 0; i < arr.length; i++) {
            minIndex = i;
            for (j = i + 1; j < arr.length; j++) {
                if (arr[j].compareTo(arr[minIndex]) < 0) {
                    minIndex = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        return arr;
    }

    // Sắp xếp chèn - Insertion Sort
    public String[] insertionSort(String[] arr) {
        int i;
        String x;
        for (i = 1; i < arr.length; i++) {
            x = arr[i];
            int post = i - 1;

            while (post >= 0 && arr[post].compareTo(x) > 0) {
                arr[post + 1] = arr[post];
                post--;
            }
            arr[post + 1] = x;
        }
        return arr;
    }

    // Merge Sort
    public String[] mergeSort(String[] arr) {
        if (arr.length <= 1) {
            return arr;
        }
        int mid = arr.length / 2;
        int i;
        String[] left = new String[mid];
        String[] right = new String[arr.length - mid];

        // Thêm phần tử vào 2 mảng con
        for (i = 0; i < mid; i++) {
            left[i] = arr[i];
        }

        for (i = mid; i < arr.length; i++) {
            right[i - mid] = arr[i];
        }

        // Đệ quy sắp xếp 2 mảng con
        mergeSort(left);
        mergeSort(right);

        // Hợp nhất 2 mảng
        merge(arr, left, right);

        return arr;
    }

    // Quick Sort
    public String[] quickSort(String[] arr) {
        if (arr.length <= 1) {
            return arr;
        }

        String pivot = arr[arr.length / 2];
        List<String> left = new ArrayList<>();
        List<String> right = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            if (i == arr.length / 2) {
                continue;
            } else if (arr[i].compareTo(pivot) <= 0) {
                left.add(arr[i]);
            } else {
                right.add(arr[i]);
            }
        }

        String[] leftArray = quickSort(toStringArray(left));
        String[] rightArray = quickSort(toStringArray(right));

        String[] result = new String[arr.length];
        int index = 0;

        for (int i = 0; i < leftArray.length; i++) {
            result[index++] = leftArray[i];
        }
        result[index++] = pivot;
        for (int i = 0; i < rightArray.length; i++) {
            result[index++] = rightArray[i];
        }

        return result;
    }

    public static void main(String[] arg) {
        test t = new test();
        String[] arr = t.generateStrings(5);
        System.out.println("------UnSorted--------");
        t.printArray(arr);
        System.out.println("------Bubble Sort--------");
        t.printArray(t.bubbleSort(arr));
        System.out.println("------Selection Sort--------");
        t.printArray(t.selectionSort(arr));
        System.out.println("------Insertion Sort--------");
        t.printArray(t.insertionSort(arr));
        System.out.println("------Quick Sort--------");
        t.printArray(t.quickSort(arr));
        System.out.println("------Merge Sort--------");
        t.printArray(t.mergeSort(arr));
       
    }
}
