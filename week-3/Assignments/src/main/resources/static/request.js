function calculateSum() {
    let inputValue = document.getElementById("numberInput").value;  // 抓取輸入的文字

    let xhr = new XMLHttpRequest();  // 1. Create an XMLHttpRequest object

    xhr.onreadystatechange = function () {  // 2. Create a callback function，成功處理時，函數執行

        if (xhr.readyState === 4 && xhr.status === 200) {  // 確認狀態是不是OK

            document.getElementById('getResponse').innerHTML = xhr.responseText; // 把回應的內容放到id為getResponse的<p>
        }
    };

    xhr.open('GET', 'http://localhost:3000/data?number=' + inputValue); // 3.Open a request
    xhr.send(); // 4. Send the request
}