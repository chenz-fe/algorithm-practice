// 插入排序
// 双层循环，外循环控制未排序的元素，内循环控制已排序的元素，将未排序元素设为标杆，与已排序的元素进行比较，小于则交换位置，大于则位置不动
// 时间复杂度O(n^2)
export const insertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const tmp = arr[i]
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > tmp) {
        arr[j] = arr[j - 1]
      } else {
        arr[j] = tmp
        break
      }
    }
  }
  return arr
}

// console.log(insertSort([5, 4, 1, 2, 6, 7, 0]))

// 选择排序
// 先假设第一个元素为最小的，然后通过循环找出最小元素，然后同第一个元素交换，接着假设第二个元素，重复上述操作即可
// 时间复杂度O(n^2)
export const selectSort = arr => {
  const len = arr.length
  let i, j, minIndex, minValue, tmp
  for (i = 0; i < len - 1; i++) {
    minIndex = i
    minValue = arr[minIndex]
    for (j = i + 1; j < len; j++) { // 通过循环选出最小的
      if (arr[j] < minValue) {
        minIndex = j
        minValue = arr[minIndex]
      }
    }
    // 交换位置
    tmp = arr[i]
    arr[i] = minValue
    arr[minIndex] = tmp
  }
  return arr
}
