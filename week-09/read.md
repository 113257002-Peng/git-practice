# AWS Troubleshooting Lab - Web Server Postmortem 誤訊息排查過程

---

> 此篇目的在於學習如何進行問題排除以及驗屍報告的撰寫，
> 經此能夠將此次經驗廣泛應用與討論於未來維護。

## Part1. 啟動 NginX

---

### 1. 多餘分號

![錯誤訊息排查_1](https://github.com/113257002-Peng/image_manage/blob/main/Week6/1_%E9%8C%AF%E8%AA%A4%E8%A8%8A%E6%81%AF%E6%8E%92%E6%9F%A5.png?raw=true)

- 起初觀察 NginX 的狀態可以得知並沒有啟用，可以從 `Active: failed`得知

- 啟動 NginX 後，出現了錯誤訊息主要是因為 error code。所以他建議使用`journalctl -xeu nginx.service`來查看更加詳細的訊息，但這邊我使用同樣的指令`sudo systemctl start nginx`來查看。

- 就可以清楚看到
  Nov 12 12:35:06 ip-172-31-47-35 nginx[2520]: 2024/11/12 12:35:06 [emerg] 2520#2520: **unexpected ";" in /etc/nginx/nginx.conf:8**
  也就是配製文件中的第八行有多的" ; "
  因此就利用`sudo nano /etc/nginx/nginx.conf`來把多餘的分號刪除。

![刪除分號](https://github.com/113257002-Peng/image_manage/blob/main/Week6/2_%E5%A4%9A%E4%BA%86%E5%88%86%E8%99%9F.png?raw=true)

---

### 2. 綁定端口 80 時的多次失敗

![錯誤訊息排查_2](https://github.com/113257002-Peng/image_manage/blob/main/Week6/3_2_%E9%8C%AF%E8%AA%A4%E8%A8%8A%E6%81%AF%E6%8E%92%E6%9F%A5.png?raw=true)

- 解決問題 1 後重新啟動 NginX 但卻同樣遇到錯誤訊息

-`nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)`可以看到 NginX 載綁定端口 80 時有多次失敗，致使無法順利啟動 NginX

![中止占用端口80的進程](https://github.com/113257002-Peng/image_manage/blob/main/Week6/4_%20%E4%B8%AD%E6%AD%A2%E7%AB%AF%E5%8F%A3%E9%80%B2%E7%A8%8B.png?raw=true)

- 先經由`sudo lsof -i :80`可以看到，進程 srv 正在占用 80 端口，也就是\*:http。所以應當把此刪除。

- `sudo kill -9 574`使用 kill -9 指令強制中止 ID 574 的進程，釋放 80 端口。

![成功啟動NginX](https://github.com/113257002-Peng/image_manage/blob/main/Week6/5_%20%E6%88%90%E5%8A%9F%E5%9F%B7%E8%A1%8CNginx.png?raw=true)

- 最終成功啟動 NginX

---

## Part2. 啟動 localhost 看見相對應內容

### 1. 防火牆規則刪除

![curl遭拒](https://github.com/113257002-Peng/image_manage/blob/main/Week6/6_curl%E9%81%AD%E6%8B%92.png?raw=true)

- 可以看到 curl 無法連接到本地的 80 端口

![防火牆刪除](https://github.com/113257002-Peng/image_manage/blob/main/Week6/7_%E9%98%B2%E7%81%AB%E7%89%86%E5%88%AA%E9%99%A4.png?raw=true)

- 經由檢查防火牆後可以發現其中`tcp dpt:http reject-with icmp-port-unreachable`將:http 給 reject 了，所以這道防火牆是需要被刪除的。
- 因此透過`sudo iptables -D INPUT -p tcp --dport 80 -j REJECT`將此條規則進行刪除。
- 最後檢查確實已經被刪除後，再次測試 curl:

![curl測試成功_but 403](https://github.com/113257002-Peng/image_manage/blob/main/Week6/%E8%A3%9C_curlBut403.png?raw=true)

- 測試成功，但有另外一個問題。以下將另外解決。

### 2. 解決 403 Forbidden

![curl測試成功_but 403](https://github.com/113257002-Peng/image_manage/blob/main/Week6/%E8%A3%9C_curlBut403.png?raw=true)

- 可以看到仍然有內容被 Forbidden。表示 Nginx 伺服器拒絕了請求，原因通常與目錄或文件的權限設置有關，即 Nginx 沒有權限讀取或執行請求的文件。

![更改權限設置](https://github.com/113257002-Peng/image_manage/blob/main/Week6/8_%E6%AC%8A%E9%99%90%E8%A8%AD%E7%BD%AE.png?raw=true)

- `ls -ld /var/myweb`以及`ls -l /var/myweb/index.html`來檢查權限。結果發現

  - 目錄 /var/myweb 的權限:
    `drwxr-xr-x` 表示擁有者 (root) 有讀、寫、執行的權限；群組和其他人只有讀和執行的權限。
  - 文件 index.html 的權限:
    `-rw-r-----` 表示擁有者 (root) 有讀和寫的權限，群組 (root) 有讀取權限，但其他人沒有任何權限。

- 因此利用`sudo chown -R www-data:www-data /var/myweb`以及`sudo chmod -R 755 /var/myweb`來給予資料夾以及底下的檔案權限。

- 最終重啟 NginX 並執行 curl 即可得到正確的結果。
