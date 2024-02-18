// script.js

function fetchData() {
  fetch("http://localhost:3000") // 修改成你的接收端伺服器的地址
    .then((response) => response.json())
    .then((data) => {
      // 使用 document.getElementById 或 document.querySelector 選擇元素，並修改其內容
      document
        .getElementById("voltage")
        .querySelector(".value").textContent = `${data.voltage} V`;
      document
        .getElementById("current")
        .querySelector(".value").textContent = `${data.current} A`;
      document
        .getElementById("temperature")
        .querySelector(".value").textContent = `${data.temperature} °C`;
      document
        .getElementById("sunlight")
        .querySelector(".value").textContent = `${data.sunlight}`;
      document
        .getElementById("time")
        .querySelector(".value").textContent = `${data.time}`;
      document
        .getElementById("mini_Amp")
        .querySelector(".value").textContent = `${data.small_current}`;
      document
        .getElementById("humidity")
        .querySelector(".value").textContent = `${data.humidity}%`;
      document
        .getElementById("raindrop")
        .querySelector(".value").textContent = `${data.raindrop}`;
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// 初始呼叫
fetchData();

// 設定每秒自動更新
setInterval(fetchData, 1000);
