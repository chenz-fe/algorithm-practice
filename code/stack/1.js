class Stack {
  constructor() {
    this.items = []
  }
  push(item) {
    this.items.push(item)
  }
  top() {
    return this.items[this.items.length - 1]
  }
  pop() {
    return this.items.pop()
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
}

const s = new Stack()

s.push(3)

console.log(s)
