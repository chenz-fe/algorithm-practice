import { insertSort, selectSort, quickSort } from '../../code/sort/sort.js'

// test('insertSort Array', () => {
//   expect(insertSort([5, 4, 1, 2, 6, 7, 0])).toStrictEqual(
//     [0, 1, 2, 4, 5, 6, 7]
//   )
// })

// test('selectSort Array', () => {
//   expect(selectSort([5, 4, 1, 2, 6, 7, 0])).toStrictEqual(
//     [0, 1, 2, 4, 5, 6, 7]
//   )
// })

test('quickSort Array', () => {
  expect(quickSort([5, 4, 1, 2, 6, 7, 0])).toStrictEqual(
    [0, 1, 2, 4, 5, 6, 7]
  )
})
