
// Tạo từ có số kí tự random
const randomString = (len) => {
    let result = ''
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < len; i++) {
        result += characters[Math.floor(Math.random() * characters.length)]
    }

    return result
}

// Tạo mảng 1000 phần tử
const arrCase = Array.from({ length: 1000 }, () => {
    // Random các từ có từ 1-5 kí tự
    return randomString(Math.floor(Math.random() * 5) + 1)
})

// Liệt kê arr
const printArr = (arr) => {
    arr.forEach(item => console.log(item))
}


// Sap xep
// Sap xep noi bot -BubleSort
/**
 * 
 * @param {Array} arr 
 * 1- Lặp qua từng phần tử của mảng
 * 2- So sánh 2 phần tử liền kề và hoán đổi chúng
 *  
 */
const bubleSort = (arrInp) => {
    const arr = [...arrInp]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

// Sap xep chon - SelectionSort
/**
 * 
 * @param {Array} arr 
 * 1- Lặp qua các phần tử mảng
 * 2- Tìm ra vị trí phần tử bé nhất
 * 3- Hoán đổi vị trí của phần tử bé nhất với phần tử đầu tiên trong dãy lặp
 */
const selectionSort = (arrInp) => {
    const arr = [...arrInp]
    for (let i = 0; i < arr.length; i++) {
        minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].toLowerCase() < arr[minIndex].toLowerCase()) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp

    }
    return arr
}

// Sắp xếp chèn- InsertionSort
/**
 * 
 * @param {Array} arr 
 * 1- Lặp qua phần tử của mảng từ vị trí số 2
 * 2- So sánh với các phần tử đã sắp xếp trước đó để tìm ra vị trí cần chèn
 * 3- Chèn vào vị trí thích hợp 
 */
const insertionSort = (arrInp) => {
    const arr = [...arrInp]
    for (let i = 1; i < arr.length; i++) {
        let x = arr[i]
        let post = i - 1

        while (post >= 0 && x.toLowerCase() < arr[post].toLowerCase()) {
            arr[post + 1] = arr[post]
            post--
        }
        arr[post + 1] = x
    }

    return arr
}

// Quick Sort
/**
 * 
 * @param {Array} arr
 * 1- Khởi tạo giá trị trung gian mảng làm vị trí chia mảng
 * 2- Lặp kiểm tra nếu giá trị bé hơn giá trị trung gian thì đẩy vào mảng bên trái và ngược lại
 * 3- Đệ quy sắp xếp 2 mảng con theo b1 và b2
 * 4- Gộp tất cả các mảng đã chia ở trên lại: left - paviot - right
 */
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const pivot = arr[Math.floor(arr.length / 2)]
    const left = []
    const right = []

    for (let i = 0; i < arr.length; i++) {
        if (i == Math.floor(arr.length / 2)) continue
        else if (arr[i].toLowerCase() < pivot.toLowerCase()) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

// Merge sort
/**
 * @param {Array} arr
 * 1- Chia mảng thành 2 mảng con 
 * 2- Đệ quy sắp xếp 2 mảng con dựa vào b1
 * 3- Gộp các mảng đã sắp xếp lại
 */

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    const result = []

    while (left.length && right.length) {
        if (left[0].toLowerCase() <= right[0].toLowerCase()) {
            result.push(left.shift())
        }
        else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]

}

// So sánh các thuật toán

const btnQS = document.querySelector('.qs')
const btnMS = document.querySelector('.ms')
const btnSS = document.querySelector('.ss')
const btnIS = document.querySelector('.is')
const btnBS = document.querySelector('.bs')
const start = document.querySelector('.st')
const reset = document.querySelector('.rs')

const rsQs = document.querySelector('.rs_qs')
const rsMs = document.querySelector('.rs_ms')
const rsSs = document.querySelector('.rs_ss')
const rsIs = document.querySelector('.rs_is')
const rsBs = document.querySelector('.rs_bs')




const timeQs = document.querySelector('.time_qs')
const timeMs = document.querySelector('.time_ms')
const timeSs = document.querySelector('.time_ss')
const timeIs = document.querySelector('.time_is')
const timeBs = document.querySelector('.time_bs')

const max = document.querySelector('.max')
const min = document.querySelector('.min')
const ss = document.querySelector('.btn_ss')




let arrTest = []
const timesResult = []

start.onclick = function () {
    arrTest = arrCase
}


reset.onclick = function () {
    arrTest = []
    timeBs.innerText = ''
    timeQs.innerText = ''
    timeMs.innerText = ''
    timeIs.innerText = ''
    timeSs.innerText = ''
    rsBs.innerText = ''
    rsQs.innerText = ''
    rsMs.innerText = ''
    rsSs.innerText = ''
    rsIs.innerText = ''
    max.innerHTML = ''
    min.innerHTML = ''
    timesResult.splice(0, timesResult.length)
}

btnQS.onclick = function () {
    const startTimeQs = performance.now()
    const sortedArrQs = quickSort(arrTest)
    const endTimeQs = performance.now()
    timeQs.innerText = endTimeQs - startTimeQs + 'ms'
    timesResult.push({ algorithm: 'QuickSort', time: endTimeQs - startTimeQs })
    rsQs.innerHTML = sortedArrQs
}
btnMS.onclick = function () {
    const startTimeMs = performance.now()
    const sortedArrMs = mergeSort(arrTest)
    const endTimeMs = performance.now()
    timeMs.innerHTML = endTimeMs - startTimeMs + 'ms'
    timesResult.push({ algorithm: 'MergeSort', time: endTimeMs - startTimeMs })

    rsMs.innerHTML = sortedArrMs

}
btnIS.onclick = function () {
    const startTimeIs = performance.now()
    const sortedArrIs = insertionSort(arrTest)
    const endTimeIs = performance.now()
    timeIs.innerHTML = endTimeIs - startTimeIs + 'ms'
    timesResult.push({ algorithm: 'InsertionSort', time: endTimeIs - startTimeIs })
    rsIs.innerHTML = sortedArrIs

}
btnSS.onclick = function () {
    const startTimeSs = performance.now()
    const sortedArrSs = selectionSort(arrTest)
    const endTimeSs = performance.now()
    timeSs.innerHTML = (endTimeSs - startTimeSs) + 'ms'
    timesResult.push({ algorithm: 'SelectionSort', time: endTimeSs - startTimeSs })
    rsSs.innerHTML = sortedArrSs

}
btnBS.onclick = function () {
    const startTimeBs = performance.now()
    const sortedArrBs = bubleSort(arrTest)
    const endTimeBs = performance.now()
    console.log(endTimeBs)
    timeBs.innerHTML = endTimeBs - startTimeBs + 'ms'
    timesResult.push({ algorithm: 'BubleSort', time: endTimeBs - startTimeBs })
    rsBs.innerHTML = sortedArrBs
}

ss.onclick = function () {
    if (timesResult.length > 0) {
        const times = timesResult.map(item => item.time)
        max.innerHTML = timesResult.filter(item => item.time == Math.min(...times))[0].algorithm
        min.innerHTML = timesResult.filter(item => item.time == Math.max(...times))[0].algorithm
    }
}

