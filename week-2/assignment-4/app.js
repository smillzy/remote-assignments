// Request 1: Click to Change Text.
const headline = document.getElementsByClassName("headline")[0]; // 只有一個headline，直接指定索引值

headline.addEventListener("click", () => {
  // 當headline被點擊
  headline.textContent = "Have a Good Time!"; // 內容更改
});

// Request 2: Click to Show More Content Boxes.
const row3 = document.getElementsByClassName("row-3")[0]; // 只有一個row-3，直接指定索引值
const row4 = document.getElementsByClassName("row-4")[0]; // 只有一個row-4，直接指定索引值
const btnUpdate = document.getElementsByClassName("main-footer")[0]; // 只有一個main-footer，直接指定索引值

btnUpdate.addEventListener("click", () => {
  // 當button被點擊
  row3.style.display = "flex"; // 展現內容
  row4.style.display = "flex"; // 展現內容
});
