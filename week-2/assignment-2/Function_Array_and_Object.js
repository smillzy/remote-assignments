function avg(data) {
  // 宣告平均，用reduce加總，初始值預設0，再計算加總 / size
  let avarage = data.products.reduce((acc, cur) => acc + cur.price, 0) / data.size;
  return avarage;
}

console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
