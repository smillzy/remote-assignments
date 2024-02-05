/**
 * Show a delayed result in the console.
 * setTimeout(functionRef, delay)
 *
 * @param {number} n1 - First number.
 * @param {number} n2 - Second number.
 * @param {number} delayTime - Delay time.
 * @param {function} callback - Callback function to execute the result.
 */

function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    let result = n1 + n2;
    callback(result);
  }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
});

/**
 * To implement delayedResult again using promise.
 * In synchronous mode, each task must be executed in order,
 * and the later task must wait for the previous task to be executed.
 * To use promise -> new Promise(function(resolve, reject)
 *
 * @returns {Promise<number>} A promise resolve the result after the delay.
 */

function delayedResultPromise(n1, n2, delayTime) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      let result = n1 + n2;
      resolve(result); // The value result will be pass out through ".then"
    }, delayTime);
  });
}
delayedResultPromise(4, 5, 3000).then(console.log);

/**
 * To implement it using async/await.
 * Eliminate the need of .then()
 */

async function main() {
  const result1 = await delayedResultPromise(4, 5, 3000);
  console.log(result1);
  const result2 = await delayedResultPromise(-5, 10, 2000);
  console.log(result2);
}
main();
