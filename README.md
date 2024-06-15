# Selection Sort:
Độ phức tạp: O(n^2) tốt, trung bình và xấu nhất

Giải thuật này hoạt động bằng cách tìm phần tử nhỏ nhất trong mảng và hoán đổi nó với phần tử đầu tiên, sau đó tìm phần tử nhỏ nhất trong phần còn lại và hoán đổi nó với phần tử thứ hai, và cứ thế tiếp tục.

## Ưu điểm:
    - Đơn giản và dễ cài đặt
    - Hiệu quả với dữ liệu nhỏ
    - Ổn định
    - Không yêu cầu bộ nhớ phụ, vì vậy phù hợp với các hệ thống có bộ nhớ hạn chế.

## Nhược điểm:
    - Không hiệu quả với dữ liệu lớn
    - Không hiệu quả khi dữ liệu đã gần được sắp xếp

# Insertion Sort:
Độ phức tạp: O(n^2) trung bình và xấu nhất. Tốt nhất 0(n)

Nó hoạt động bằng cách lấy từng phần tử trong mảng và chèn nó vào vị trí thích hợp trong các phần tử đã được sắp xếp

## Ưu điểm:
    - Đơn giản và dễ cài đặt
    - Hiệu quả với dữ liệu nhỏ và gần như đã được sắp xếp
    - Ổn định

## Nhược điểm:
    - Không hiệu quả với dữ liệu lớn
    - Không hiệu quả với dữ liệu được sắp xếp ngược

# Bubble Sort:
Độ phức tạp: O(n^2) trung bình và xấu nhất. Tốt nhất 0(n)

Nó hoạt động bằng cách liên tục hoán đổi vị trí của các phần tử liền kề nếu chúng không đúng thứ tự.

## Ưu điểm:
    - Đơn giản và dễ cài đặt
    - Ổn định

## Nhược điểm:
    - Không hiệu quả với dữ liệu lớn
    - Không hiệu quả với dữ liệu đã được sắp xếp

# Merge Sort:
Độ phức tạp: O(n log n) tốt, trung bình và xấu nhất

Nó hoạt động bằng cách chia mảng thành hai nửa, sắp xếp từng nửa, và sau đó trộn chúng lại với nhau.

## Ưu điểm:
    - Hiệu quả với dữ liệu lớn
    - Ổn định

## Nhược điểm:
    - Yêu cầu bộ nhớ bổ sung khoảng O(n)
    - Không hiệu quả với dữ liệu nhỏ

# Quick Sort:
Độ phức tạp: O(n log n) tốt và trung bình, O(n^2) xấu nhất (khi dữ liệu sắp xếp ngược)

Nó hoạt động bằng cách chọn một vị trí trục từ mảng, sau đó chia mảng thành hai phần - các phần tử nhỏ hơn pivot và các phần tử lớn hơn pivot. Nó sau đó đệ quy sắp xếp hai phần này

## Ưu điểm:
    - Hiệu quả với dữ liệu lớn
    - Không yêu cầu bộ nhớ bổ sung nhiều

## Nhược điểm:
    - Không ổn định
    - Không hiệu quả với dữ liệu đã được sắp xếp hoặc đảo ngược

# =>
BubbleSort, InsrtionSort, SelectionSort có độ phức tạp O(n^2) nên sẽ chạy lâu hơn so với QuickSort và MergeSort.

MergeSort, QuickSort sử dụng trong trường hợp dữ liệu lớn đòi hỏi xử lí nhanh chóng và tiêu chí sắp xếp phức tạp.

QuickSort sẽ được dùng với trường hợp trên và yêu cầu ít tài nguyên bộ nhớ.

Đối với các trường hợp dữ liệu nhỏ và gần như được sắp xếp thì: BubbleSort hoặc InsertionSort sẽ tối ưu hơn

