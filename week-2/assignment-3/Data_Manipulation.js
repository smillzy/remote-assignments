/*
@count：return an object which shows the count of each character 返回一個對象，顯示每個字元的計數。
@groupByKey: return an object which shows the summed-up value of each key 返回一個對象，顯示每個鍵的總和

This time, you may get letters from ‘a’ to ‘z’, try to avoid using ‘if’ or ‘switch’ to split each
letter into different cases (e.g. if(letter == ‘a’) {…} else if (letter == ‘b’) {…} ), otherwise, your
code will be very long
這一次，你可能會得到從“a”到“z”的字母，盡量避免使用“if”或“switch”來拆分每個字母
字母轉換為不同的大小寫（例如 if（letter == 'a'） {...} else if （letter == 'b'） {...} ），否則，你的代碼會很長。

In the second function, the input may have the same key but different values, the
output should have each key only once.
在第二個函數中，輸入可能具有相同的鍵但值不同，輸出的每個鍵應該只有一次。
*/

function count(input) {
  // your code here
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
  // your code here
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
