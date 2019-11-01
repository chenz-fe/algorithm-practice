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
    for (j = i + 1; j < len; j++) {
      // 通过循环选出最小的
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

// 快速排序
// export const quickSort = arr => {
//   let left = []
//   let right = []
//   let target = arr[0]
//   if (arr.length <= 1) {
//     return arr
//   } else {
//     arr.forEach((ele, index) => {
//       if (index === 0) return
//       if (ele <= target) {
//         left.push(ele)
//       } else {
//         right.push(ele)
//       }
//     })
//   }
//   return [...quickSort(left), target, ...quickSort(right)]
// }

export const quickSort = arr => {
  let result = [...arr]
  let length = result.length - 1
  let parts = [[0, length]]

  while (parts.length) {
    let part = parts.shift()

    let l = part[0]
    let r = part[1]

    if (l >= r) continue
    let temp = result[l]
    let i = l
    let j = r

    while (i < j && j > i) {
      while (result[j] > temp) {
        j--
      }
      if (i < j) {
        result[i] = result[j]
        i++
      }
      while (result[i] < temp && i < length && i !== j) {
        i++
      }
      if (i < j) {
        result[j] = result[i]
        j--
      }
    }
    result[i] = temp
    parts.push([l, i - 1], [i + 1, r])
  }
  console.log(result)
  return result
}
