const Stack = require('../stack/stack')

// 定义节点
class BinaryTreeNode {
  constructor(data) {
    this.data = data
    this.leftChild = null
    this.rightChild = null
    this.parentNode = null
  }
}

// 定义二叉树
class BinaryTree {
  constructor() {
    this.root = null
  }
  initTree(string) {
    let stack = new Stack()
    let k = 0
    let newNode = null
    for (let i = 0; i < string.length; i++) {
      const item = string[i]
      if (item === '(') {
        stack.push(newNode)
        k = 1
      } else if (item === ')') {
        stack.pop()
      } else if (item === ',') {
        k = 2
      } else {
        newNode = new BinaryTreeNode(item)
        if (this.root === null) {
          this.root = newNode
        } else if (k === 1) {
          let topItem = stack.top()
          topItem.leftChild = newNode
          newNode.parentNode = topItem
        } else {
          let topItem = stack.top()
          topItem.rightChild = newNode
          newNode.parentNode = topItem
        }
      }
    }
  }
  // 中序遍历: 左子树 -> 当前节点 -> 右子树
  inOrder(node) {
    if (node === null) return
    this.inOrder(node.leftChild)
    console.log(node.data)
    this.inOrder(node.rightChild)
  }
  // 前序遍历: 先输出节点值，再递归遍历左右子树
  preOrder(node) {
    if (node === null) return
    console.log(node.data)
    this.preOrder(node.leftChild)
    this.preOrder(node.rightChild)
  }
  // 后序遍历: 先递归遍历左右节点，再输出当前节点
  postOrder(node) {
    if (node === null) return
    this.postOrder(node.leftChild)
    this.postOrder(node.rightChild)
    console.log(node.data)
  }
  treeNodeCount(node) {
    if (!node) return 0
    let leftNodeCount = this.treeNodeCount(node.leftChild)
    let rightNodeCount = this.treeNodeCount(node.rightChild)
    return leftNodeCount + rightNodeCount + 1
  }
  size() {
    return this.treeNodeCount(this.root)
  }
  treeHeight(node) {}
  findNode(node) {}
  getRoot() {
    return this.root
  }
}

let t = new BinaryTree()
// 用广义表代表数结构
t.initTree('A(B(D,E(G,)),C(,F))')
let rootNode = t.getRoot()
// t.inOrder(rootNode)
// t.preOrder(rootNode)
// t.postOrder(rootNode)
console.log(t.size())

