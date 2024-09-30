- [x] AWS 帳號註冊
- [x] dependencies 與 devDependencies
- [x] package.json 中的 scripts
- [x] Port number 要怎麼以環境變數來設定？
- [x] 檔案的上傳與不上傳考量因素
- [x] CJS vs ESM

# dependencies 與 devDependencies

在使用 npm 時，dependencies 和 devDependencies 之間的區別主要體現在**安裝命令和使用場景**上。

執行`npm install --save-dev` 時，所安裝的套件會被寫入到 devDependencies 中，**這些套件通常只在開發環境中使用**，例如構建工具（如 Gulp 和 Webpack）。

執行`npm install --save`時，所安裝的套件則會被寫入到 dependencies 中，這些是**需要在生產環境中使用的依賴**。例如，如果您的專案依賴於 jQuery，沒有這個庫的話，應用將無法正常運行，因此應將 jQuery 添加到 dependencies 中，並確保它會被打包到最終的 JavaScript 文件中。

### 總結

- **dependencies** 是專案在生產環境中運行時所需的套件。這些是應用程式正常運作所必須的依賴。

- **devDependencies** 是專案在開發過程中所需的套件，但在生產環境中不需要這些依賴。這些通常是用於**測試、編譯、打包等開發工具**。

# package.json 中的 scripts

主要用途是能夠增加工作的效率。若是善加利用將可以省去許多打指令的時間。

舉例來說:

```javascript
{
  "scripts": {
    "start": "node app.js",
  }
}
```

如上面的設定，本來要打`node app.js`才能夠執行 node.js，但若是設定好後只需要在 terminal 輸入`npm start`就可以達到一樣的效果。

這個例子或許不是那麼明顯的體現 script 的強大。再以下面這篇文章所提到的為例:
文章連結: [【Day4】建立 Node.js 專案 & 全面解析專案管家 package.json](https://ithelp.ithome.com.tw/m/articles/10239752)

- 要執行的內容
  `rm -rf node_modules package-lock.json .nuxt yarn.lock yarn-error.log && yarn && yarn upgrade && yarn dev`

- 放進 scripts

```
{
    ...
    "scripts": {
        "clean_start": "rm -rf node_modules package-lock.json .nuxt yarn.lock yarn-error.log && yarn && yarn upgrade && yarn dev"
    },
    ...
}
```

如此只需要執行`npm clean_start`就可以代替這個繁瑣的指令!

---

# Port number 要怎麼以環境變數來設定？

我是利用 dotenv 套件

1. 安裝好 dotenv 套件: `npm install dotenv`
2. 在專案的根目錄或您想要的資料夾中創建一個名為 **.env** 的檔案
3. .env 裡面就可以輸入環境變數，譬如:

```
PORT=5500
```

然後建構 express:

```javascript
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
```

![port:5500](https://github.com/113257002-Peng/image_manage/blob/main/Week3/port5500.jpg?raw=true)
這樣的話就可以成功在環境變數中控制 port number，只是要記得通常會把環境變數給 gitignore。

---

# 上傳與不上傳哪些檔案

## 上傳

1. 專案的所有源程式碼，能夠實現功能以及正常執行的所有程式碼。
2. package.json 和 package-lock.json，這些檔案包含專案的依賴資訊和版本號，是其他開發者在克隆專案後安裝相應依賴的關鍵。
3. readme.md 等說明文件。

## 不上傳

1. 機密資訊，像是.env 這類的環境變數檔案。
2. 無意義的檔案，例如.log 檔案，只會讓內容變的雜亂骯髒。

---

# CJS vs ESM

### CommonJS (CJS)

- **語法**：

  - 使用 `require()` 來導入模組。
  - 使用 `module.exports` 來導出模組。

- **用途**：

  - 主要在 Node.js 環境中使用，適合伺服器端應用。

- **加載方式**：

  - 同步加載，當需要模組時立即加載。

- **範例**：

  ```javascript
  // 導出
  module.exports = { add: (a, b) => a + b };

  // 導入
  const math = require("./math");
  ```

### ES Modules (ESM)

- **語法**：

  - 使用 `import` 來導入模組。
  - 使用 `export` 來導出模組。

- **用途**：

  - 標準的 JavaScript 模組系統，適用於瀏覽器和 Node.js（自 Node.js 12 版本開始支持）。

- **加載方式**：

  - 支持靜態加載和動態加載，能進行靜態分析。

- **範例**：

  ```javascript
  // 導出
  export const add = (a, b) => a + b;

  // 導入
  import { add } from "./math.js";
  ```

### 總結

- **CJS**：適合伺服器端，使用 `require` 和 `module.exports`，同步加載。
- **ESM**：適用於現代 JavaScript，使用 `import` 和 `export`，支持靜態和動態加載。

### 關於靜態與動態加載

- **靜態加載:**
  是指在編譯時（或程式啟動時）就確定需要加載的模組。這些模組在代碼執行之前會被解析和加載。

- **動態加載:**
  是在運行時根據條件或需要動態地加載模組。代表模組的加載不在編譯時確定，而是在程式執行過程中。
