# 任務內容

- [x] 小組報告評論
- [x] 網域購買與憑證申請
- [x] 回答所有問題

---

# 我的網址

https://www.weicyun.com/
會用 weicyun 的原因是因為我家的公司名稱是偉群，我很久以前就有想過幫家裡的公司架設一個網站，所以藉此機會購買這個網域!

# 購買網域的地方

Godaddy: https://tw.godaddy.com
一開始本來想用 Namecheap，但我的信用卡刷不過所以就換到 Godaddy，而且 Godaddy 的介面做的好漂亮!又很清楚甚至有中文介面!很棒!價格也只比 Namecheap 貴了幾十元!

---

** DNS type **
![DNS](https://github.com/113257002-Peng/image_manage/blob/main/Week5/%E9%A1%9E%E5%9E%8B%E8%A8%AD%E5%AE%9A.png?raw=true)

# DNS 的 A record 是什麼？

A 記錄的主要目的是將 DNS 網域名稱映射到一個 IPv4 位址，這個位址可以是公共或私人 IP。

像我們這個實作，就是在 AWS 上架設好 EC2 之後，該 EC2 會分配一個 公共 IP 位址（Public IP Address） 或 彈性 IP（Elastic IP）。然後，我們可以將購買的 DNS 網域名稱透過設定 A record，將這個域名解析指向 EC2 的 Public IP，這樣用戶就可以通過域名直接訪問 EC2 上的應用或網站。

# DNS 的 NS record 是什麼？

簡單來說，**NS 記錄（Name Server Record）** 就是用來告訴 DNS 系統，某個網域名稱應該由哪些名稱伺服器(Name Servers)來處理和管理解析。

在上面的圖中，你的域名 `weicyun.com` 有兩個 **NS 記錄**：

- `ns25.domaincontrol.com`
- `ns26.domaincontrol.com`

代表有人查詢我的網域名稱 `weicyun.com`，全球的 DNS 系統會詢問這兩個名稱伺服器 (`ns25.domaincontrol.com` 和 `ns26.domaincontrol.com`)，來獲取更詳細的 DNS 記錄（例如 A 記錄或 CNAME 記錄），進而返回具體的 IP 位址，
簡單概念：

- **NS 記錄**：告訴 DNS 系統「誰負責解析這個網域的記錄」。
- `ns25.domaincontrol.com` 和 `ns26.domaincontrol.com` 是負責解析 `weicyun.com` 網域名稱的伺服器。

設定了這兩個 NS 記錄，其他 DNS 伺服器就會知道應該向這兩個伺服器查詢 `weicyun.com` 的相關資訊。

# Domain Name vs FQDN vs URL 這三者分別為何？

Domain Name:
是一個**易於記憶的名稱**，用來代表一個網站或服務的 IP 位址（如 example.com）。

FQDN:
是指明**完整路徑的域名**，包含網域名稱的所有層級，並以根結尾（如 www.example.com.）。

URL:
是用來指**定網路資源的完整地址**，包含**協議**、**網域名稱**和**資源的具體路徑**（如 https://www.example.com/about.html）

# 為什麼應該要為網站加上憑證？而不是直接用 http 就好？

直接使用 HTTP 存在安全風險，因為它無法提供加密、驗證和資料完整性保護。使用 HTTPS（加上 SSL/TLS 憑證）能確保網站和用戶之間的通訊安全、資料不被竄改、並提升網站的信譽和 SEO 排名，這是現代網站建設中不可或缺的一部分。

因此，為網站加上憑證並使用 HTTPS 是一個非常重要的安全措施，保護你的網站和用戶免受潛在的攻擊。

簡單來說，就是以下幾個重要的點:

1. **能夠加密:**
   提高資料的安全性、完整性(因為不易受到駭客攻擊)。

2. **SEO 優勢:**
   搜尋引擎為了自身名譽，通常會推薦 https 的網域。

3. **用戶信任:**
   畢竟看到「此網站不安全」一般使用者都會害怕，進而不信任。

4. **合規:**
   一些法律和合規標準（如 GDPR）要求網站必須保護使用者的敏感資料。對於任何處理敏感資訊（例如信用卡資料、個人身份資料等）的網站來說，使用 HTTPS 是必須的。
