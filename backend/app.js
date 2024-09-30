require("dotenv").config(); // 載入 dotenv 套件

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // 使用環境變數，如果沒有則使用預設值 3000

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
