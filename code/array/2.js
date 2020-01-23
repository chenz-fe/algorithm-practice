// 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

const twoSum = (nums, target) => {
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let element = nums[i]
    for (let j = 1; j < nums.length - 1; j++) {
      if (element + nums[j] === target) {
        result = [i, j]
        break
      }
    }
  }
  return result
}

console.log(twoSum([1, 2, 3, 4, 5], 7))

// 斐波那契数列 26
