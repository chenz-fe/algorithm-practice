/* eslint-disable no-eval */
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

// 合法括号
// function isLegalBracket(str) {
//   const stack = new Stack()
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] === '(') {
//       stack.push(str[i])
//     } else if (str[i] === ')') {
//       if (!stack.isEmpty()) {
//         stack.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return stack.isEmpty()
// }

// console.log(isLegalBracket('(123)))'))
// console.log(isLegalBracket('(123)'))
// console.log(isLegalBracket('(1(4)3)'))

// 计算后缀表达式
// ['4','10','5','/','+']
function calcExp(exp) {
  let stack = new Stack()
  for (let i = 0; i < exp.length; i++) {
    let item = exp[i]
    if (['+', '-', '*', '/'].indexOf(item) > -1) {
      const value1 = stack.pop()
      const value2 = stack.pop()
      const newVal = parseInt(eval(value2 + item + value1))
      stack.push(newVal.toString())
    } else {
      stack.push(item)
    }
  }
  return stack.pop()
}

console.log(calcExp(['4', '10', '5', '/', '+']))
