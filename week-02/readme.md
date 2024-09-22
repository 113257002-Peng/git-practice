# 要安裝哪個 Node.js 版本?

首先要先考慮幾個因素

1.  專案相容性
    若你的專案或第三方庫依賴於特定版本的 Node.js，請確保所安裝的版本與專案相容。某些 Node.js 的重大版本可能會引入破壞性的變更，使得較舊的應用或庫無法運行。
    > **但我現在沒有組別，也沒有專案限制，所以這個我目前不會特別考慮**
2.  是否為 LTS 版本
    LTS (Long Term Support): 這是長期支援版本，適合大多數開發專案，因為它更穩定，並且在更長的時間內會提供錯誤修復和安全更新。建議用於生產環境的應用程式。
    Current 版本: 這是包含最新功能和改進的版本，但它的支援時間較短，適合進行測試、研究新功能或嘗試新技術。
    > **而 Node.js 的偶數版本通常較為穩定，並享有長期支援（LTS），適合生產環境使用；而奇數版本屬於實驗版本，主要用於測試新功能，不建議在生產環境中使用。**
3.  Node.js 的發行週期
    LTS 版本通常在發布的 6 個月後進入 "Active LTS" 階段，並維持約 30 個月的支援期。

---

綜上所述，我就直接挑選主版本號為偶數的 LTS 版本就好了，如果以後有啥問題或是要配合專案開發再利用 nvm 去更改版本就好了。
Node.js version: 20.17.0
![Node.js Version](https://github.com/113257002-Peng/image_manage/blob/main/Week2/NodeJS_Version.jpg?raw=true)

# nvm(Node Version Manager)

- nvm 是專門用來管理多個 Node.js 版本的工具
- 因為不同專案可能需要使用不同的 Node.js 版本，而 nvm 可以超方便的管理 node.js 的版本
- 像上圖就是一個範例。先用**nvm install**很輕鬆地先下載 20.17.0 版本，並且利用**nvm use**的指令將 node.js 的版本從 21.6.1 切換至 20.17.0

> 常見指令:
> nvm install <version> # 安裝特定的 Node.js 版本
> nvm use <version> # 切換至指定版本
> nvm ls # 列出所有已安裝的 Node.js 版本
> nvm uninstall <version> # 移除特定的 Node.js 版本

---

# npm (Node Package Manager)

- npm 是 Node.js 的內建套件管理器
- 每個使用 Node.js 的專案通常會有一個 package.json 文件，用來描述專案所需要的各種第三方套件

> 常見 npm 的操作命令：
> npm install <package> # 安裝特定套件
> npm install # 根據 package.json 安裝專案所需的所有依賴
> npm uninstall <package> # 移除已安裝的套件
> npm update # 更新所有已安裝的套件
> npm publish # 發佈自己的模組到 npm 儲存庫
> npm list # 列出所有已安裝的套件

---

## 總結

- **nvm**:
  用於管理 Node.js 版本，使得你可以安裝、切換多個版本，特別適合多專案開發環境。
- **npm**:
  用於管理 JavaScript 的依賴和模組，負責安裝、更新、發佈和管理專案中的各種第三方庫。

---

##### 參考資料

1. ChatGPT 4o

2. 林威儒. (2020, July 20). 了解 Node.js、NVM、NPM 差別. Medium. https://a0910288060.medium.com/%E4%BA%86%E8%A7%A3node-js-nvm-npm%E5%B7%AE%E5%88%A5-47cda7c1d569

3. 我有一棵树. (2023, July 23).nodejs 不同版本之前的小知识，奇数版本 vs 偶数版本，不要使用奇数版本的 node. CSDN. https://blog.csdn.net/qq_17335549/article/details/131850634

4. Chiachin. (2022, Novemeber 14). 常見開發習慣造成的資安問題與錯誤. netiCRM. https://netivism.com.tw/blog/515
