function quickSort1(arr) {
  let sortedArray = [...arr]
  const length = sortedArray.length - 1
  var parts = [[0, length]]
  while (parts.length) {
    // console.log(parts)
    var part = parts.shift()
    var l = part[0]
    var r = part[1]
    var target = sortedArray[l]
    var i = l
    var j = r
    if (l >= r) {
      continue
    }

    while (i < j) {
      while (sortedArray[j] > target) {
        j--
      }
      if (i < j) {
        sortedArray[i] = sortedArray[j]
        i++
      }

      while (sortedArray[i] < target && i < length && i !== j) {
        i++
      }
      if (i < j) {
        sortedArray[j] = sortedArray[i]
        j--
      }
    }
    sortedArray[i] = target
    parts.push([l, i - 1], [i + 1, r])
  }
  return sortedArray
}
// console.time(1)
let r1 = quickSort1([5, 4, 1, 2, 6, 7, 11, 0])
console.log(r1)
// console.timeEnd(1)

// console.time(2)
// let r = quickSort([3, 1, 2, 5, 4, 3, 8, 7, 7, 3])
// console.log(r)
// console.timeEnd(2)
