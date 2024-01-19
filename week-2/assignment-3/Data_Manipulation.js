function count(input) {
  // 使用 reduce 計算每個元素的數量
  let groups = input.reduce((allNumbers, number) => {
    if (number in allNumbers) {
      // 如果number存在allNumbers，計數器加1
      allNumbers[number]++;
    } else {
      // 如果number不存在allNumbers，初始值設為1
      allNumbers[number] = 1;
    }
    return allNumbers;
  }, {}); // 以物件顯示

  return groups;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  let groups = input.reduce((group, current) => {
    // 宣告新的key
    let newKey = current.key;
    if (newKey in group) {
      // 如果 key 已經存在，則累加對應的值
      group[newKey] += current.value;
    } else {
      // 如果 key 不存在，初始值設為value
      group[newKey] = current.value;
    }
    return group;
  }, {});

  return groups;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
