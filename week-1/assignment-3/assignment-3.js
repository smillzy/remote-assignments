function countAandB(input) {
  // 先設置一個計數器
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
      // 如果input[i]是a，計數器就加一
      count++;
    } else if (input[i] === "b") {
      // 如果input[i]是b，計數器就加一
      count++;
    } else {
      // 都不是計數器維持不變
      count = count;
    }
  }

  // 返回count值
  return count;
}

function toNumber(input) {
  //創建一個array
  let arraynew = [];

  for (let i = 0; i < input.length; i++) {
    let stringWord = input[i]; // 取出array中的第i項
    let toNumber = stringWord.charCodeAt(0) - 96; // 將第i項轉成UTF-16碼元，UTF-16中a是97，所以要再減96，a才會是1，以此類推
    arraynew.push(toNumber); // 將剛剛的數字放進array
  }

  // 返回array值
  return arraynew;
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ lettersand 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1,3]

let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
