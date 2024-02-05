/**
 * AJAX function for making HTTP GET requests.
 *
 * @param {string} src - URL for the request. Here use GET method.
 * @param {function} callback - Callback function to handle response.
 */

function ajax(src, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText); // Parse the JSON response.
      callback(response); // Put data into callback.
    }
  };
  xhr.open("GET", src, true); // Open GET request.(method, src, async)
  xhr.send();
}

/**
 * Callback function to display product info on the page.
 * Because I want the product info show in different lines, I'll create a new "div" which is named productElement.
 *
 * @param {Array} response - Contain product info.
 */

function callback(response) {  // Execute function when readyState and status are true.
  let container = document.createElement("div");  // Create a div container.

  response.forEach((product) => {  // Use forEach to iterate the data.
    let productElement = document.createElement("div");
    productElement.textContent = `Product: ${product.name}, Price: ${product.price}`;
    container.appendChild(productElement);  // Append a single node to container.
  });

  document.body.appendChild(container);  // Append container info to body.
}

ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    callback(response);
  }
);
