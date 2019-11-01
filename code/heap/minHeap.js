/**
 * 最小堆
 */
class MinHeap {
  constructor(arr) {
    this.heap = [...arr]
    this.init()
  }
  init() {
    let currentNodeIndex = this.getLastNodeIndex()
    while (currentNodeIndex >= 0) {
      this._shiftDown(currentNodeIndex)
      currentNodeIndex -= 1
    }
    return this.heap
  }
  print() {
    console.log(this.heap)
  }
  size() {
    return this.heap.length
  }
  getLastNodeIndex() {
    return Math.floor((this.size() - 2) / 2)
  }
  getParentIndex(i) {
    return parseInt((i - 1) / 2)
  }
  getLeftIndex(i) {
    return 2 * i + 1
  }
  getMaxIndex() {
    return this.size() - 1
  }
  getMin() {
    if (this.size() > 0) {
      return this.heap[0]
    }
    return null
  }
  insert(ele) {
    this.heap.push(ele)
    this._shiftUp(this.getMaxIndex())
  }
  removeMin() {
    let currentSize = this.size()
    if (currentSize <= 0) return
    let minValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this._shiftDown(0)
    return minValue
  }
  _swap(left, right) {
    let leftValue = this.heap[left]
    this.heap[left] = this.heap[right]
    this.heap[right] = leftValue
  }
  _shiftDown(startIndex) {
    let parentIndex = startIndex
    let minChildIndex = this.getLeftIndex(startIndex)
    let maxIndex = this.getMaxIndex()
    while (minChildIndex <= maxIndex) {
      if (
        minChildIndex < maxIndex &&
        this.heap[minChildIndex] > this.heap[minChildIndex + 1]
      ) {
        minChildIndex = minChildIndex + 1
      }
      if (this.heap[parentIndex] <= this.heap[minChildIndex]) {
        break
      } else {
        this._swap(parentIndex, minChildIndex)
        parentIndex = minChildIndex
        minChildIndex = this.getLeftIndex(minChildIndex)
      }
    }
  }
  _shiftUp(startIndex) {
    let childIndex = startIndex
    let parentIndex = this.getParentIndex(startIndex)
    while (childIndex > 0) {
      if (this.heap[parentIndex] <= this.heap[childIndex]) {
        break
      } else {
        this._swap(parentIndex, childIndex)
        // 更新需要调整的索引为父节点的索引，以便于下一次继续向上调整
        childIndex = parentIndex
        parentIndex = this.getParentIndex(childIndex)
      }
    }
  }
}

let arr = [4, 53, 17, 78, 9, 45, 65, 87, 23, 101]
// let h = new MinHeap(arr)
// h.init()
// h.insert(11)
// // h.print()
// h.removeMin()
// h.print()

// 最小堆排序
const minHeapSort = arr => {
  let h = new MinHeap(arr)
  let sortArr = []
  arr.forEach(e => sortArr.push(h.removeMin()))
  return sortArr
}
// console.log(minHeapSort(arr))

// TOP K：求 n 个整数的数据集合中最大的 k 个值
const topK = (arr, k) => {
  let initArr = arr.slice(0, k)
  let h = new MinHeap(initArr)
  for (let i = k; i < arr.length; i++) {
    let item = arr[i]
    if (item > h.getMin()) {
      h.removeMin()
      h.insert(item)
    }
  }
  return h.heap
}

// console.log(topK(arr, 4))

const getMinItem = arr => {
  let min = arr[0]
  let minIdx = 0
  let newArr = [...arr]
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
      minIdx = i
    }
  }
  const randomNum = parseInt(Math.random()*100)
  console.log(randomNum)
  newArr.splice(minIdx,1,randomNum)
  return newArr
}
console.log(getMinItem(arr))
