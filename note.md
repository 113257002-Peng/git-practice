# 筆記

**寫作業的過程當中學到了許多東西，但很不方便儲存筆記。因此創建此 md 來做為此次作業的額外筆記。**

---

## Week2

### class 類別概念

- ES6（ECMAScript 2015）引入的語法，用來建立物件的藍圖。
- 定義了物件的結構（屬性和方法）

### export default class Stack

**簡單來說就是讓別的 js import 的時候需要的。**

> export default class Stack {
> // 類別的定義與方法
> }

- 這樣寫表示 Stack 類別是這個模組的預設匯出，其他模組可以直接匯入並使用這個類別。

#### 匯出時的差異

> // 匯入並命名為任意名稱，這裡匯入名稱為 Stack，你要叫他 Hello 也都可以隨便你。
> import **Stack** from './stack.js'; // 假設 stack.js 是模組檔案的名稱
> const myStack = new Stack(); // 創建 Stack 的實例
> myStack.push(10);
> console.log(myStack.peek()); // 10

以下這樣子已可以(名稱改成 MyStack)

> import **MyStack** from './stack.js'; // 用 MyStack 命名這個匯入項目
> const stack = new MyStack();
> stack.push(20);
> console.log(stack.peek()); // 20

#### 如果換成明確指定匯出名稱

命名匯出範例：

> // 使用命名匯出
> export class Stack {
> // 類別定義
> }

匯入時需要用 import { Stack } 的語法：

> import { Stack } from './stack.js'; // 匯入需要用大括號包住名稱
> const myStack = new Stack();

---

## #items（私有屬性）概念

- "#" 是 JavaScript 中用來宣告「私有屬性」的符號，是 ES2020 之後引入的特性。當你在類別中使用 "#" 開頭的屬性時，該屬性變成「私有屬性」，只能在類別內部訪問，無法從外部直接存取或修改。
- 確保類別內部的資料只能通過定義好的方法來訪問或修改，而不能被外部的代碼直接操作，**這可以防止誤用或破壞內部資料的完整性**。

### e.g.

> class Example {
> #privateField; // 宣告私有屬性
> constructor() {
> this.#privateField = 42; // 初始化私有屬性
> }
>
> getPrivateField() {
> return this.#privateField; // 透過方法訪問私有屬性
> }
>
> }
> const example = new Example();
> console.log(example.getPrivateField()); // 輸出: 42
> console.log(example.#privateField); // 錯誤：無法直接存取私有屬性

### 以本次的作業為例:

- 在 Stack 類別中，#items 是一個私有屬性，用來存放堆疊的所有元素。

> #items;
>
> - 初始化：在 constructor 中，#items 被初始化為一個空的陣列，這個陣列就是用來存放堆疊中的元素

> constructor() {
> this.#items = [];
> }
>
> - 私有性：由於 #items 是私有屬性，外部的代碼無法直接修改它，**只能通過類別內的方法（如 push()、pop() 等）來對它進行操作**。這確保了堆疊的資料結構和操作規則不會被外部的使用者隨意破壞。

例如，使用者無法這樣直接存取或修改 items：

> const stack = new Stack();
> console.log(stack.#items); // 這會報錯，因為 #items 是私有屬性

---

## Week3

### 環境變數

- 環境變數基本上是指在某個環境中，所有程式都能讀取的變數。

- 常聽到的系統環境變數是指在整個作業系統中自動可用的變數。例如，如果將 Python 的路徑設定到系統環境變數中，那麼在命令提示字元（cmd）中就能直接使用 python 指令，因為系統可以識別這個指令。

- 環境變數不僅存在於系統層級，在許多專案開發過程中，也需要設定專案層級的環境變數，以避免機密資訊的外洩並增強程式的彈性。例如，如果將端口號直接寫死在程式碼中，會使其缺乏靈活性。因此，通常會使用環境變數來解決這個問題，使得端口號可以根據不同的環境進行調整，而不需要改動程式碼。

### 如何為專案設置環境變數

#### 步驟 1: 安裝 `dotenv` 套件

1. 在終端機中進入您的專案資料夾（例如 `./backend`）。
2. 執行以下命令來安裝 `dotenv` 套件：
   ```bash
   npm install dotenv
   ```

#### 步驟 2: 創建 `.env` 檔案

1. 在專案的根目錄或 `./backend` 資料夾中創建一個名為 `.env` 的檔案。
2. 在 `.env` 檔案中添加您的環境變數。例如，設定端口號：
   ```plaintext
   PORT=3000
   DB_PASSWORD=mysecretpassword
   API_KEY=yourapikey
   ```

#### 步驟 3: 修改程式碼以載入環境變數

1. 在您的主程式檔案（例如 `app.js` 或 `index.js`）中，載入 `dotenv` 套件並設置環境變數。代碼示例如下：

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

#### 步驟 4: 添加 `.env` 到 `.gitignore`

1. 在專案根目錄或 `./backend` 資料夾中，創建或編輯 `.gitignore` 檔案，並添加以下行來忽略 `.env` 檔案：
   ```plaintext
   .env
   ```

#### 步驟 5: 測試環境變數

1. 啟動您的應用程式，並檢查是否正確使用了環境變數：
   ```bash
   node app.js
   ```
2. 在瀏覽器中訪問 `http://localhost:3000/`，確認應用程式正常運行。

#### 總結

透過以上步驟，您可以輕鬆地在專案中設定和管理環境變數，這樣不僅提升了靈活性，也確保了敏感資訊的安全性。
