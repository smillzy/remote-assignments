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
  // 宣告變數存取索引值
  let arrayIndex;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      // 如果array中的索引值等於target
      arrayIndex = numbers.indexOf(numbers[i]); // 則arrayIndex等於該索引值的位置
      break; // 變更完後即跳出
    } else {
      // 如果都查不到
      arrayIndex = -1; // 索引值等於-1
    }
  }
  return arrayIndex;
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
