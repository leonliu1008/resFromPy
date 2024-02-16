const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// 存儲接收到的資料
let latestData = null;

// 將資料用Web呈現
app.get("/", (req, res) => {
  res.json(latestData);
});

// 接收資料的端點
app.post("/receive_data", (req, res) => {
  try {
    const data = req.body;
    latestData = data;

    console.log(`收到的資料: ${JSON.stringify(data)}`);
    res.status(200).send("來自server:資料接收成功");
  } catch (error) {
    console.error(`處理資料發生錯誤: ${error}`);
    res.status(500).send("資料處理錯誤");
  }
});

// 開始監聽指定的埠
app.listen(port, () => {
  console.log(`接收端伺服器運行在 http://localhost:${port}`);
});
