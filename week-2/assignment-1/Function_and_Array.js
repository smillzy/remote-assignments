/*
@findPosition: find the first position of the target number inside an array of numbers.
               The position should be counted starting from 0, if you can't find the target, please return -1
在數位數位數位數組中找到目標數位的第一個位置。位置應從0開始計算，如果找不到目標，返回-1
*/

function max(numbers) {
  // 宣告一個基準0
  let maxNumber = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      // 如果array中的索引值大於基準
      maxNumber = numbers[i]; // 則基準等於該array中的索引值
    }
  }

  return maxNumber;
}

function findPosition(numbers, target) {
  // your code here, for-loop method preferred
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
