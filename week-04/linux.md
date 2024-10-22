# Linux 基本介紹

學習 Linux 不僅僅是掌握指令，理解 Linux 的一些重要概念對於深刻理解和高效使用這個操作系統非常重要。這些概念涉及到 Linux 系統的運行原理、檔案系統結構、權限管理、進程管理等，了解這些概念可以幫助您更好地管理和操作 Linux 系統。以下是一些關鍵的 Linux 概念：

### 1. **Linux 檔案系統結構**

Linux 系統遵循一個層次化的檔案系統，所有的資料和裝置都被視為檔案，並且位於根目錄 `/` 之下。理解 Linux 的目錄結構對於高效管理系統非常重要。

#### 常見目錄：

- **`/`**：根目錄，所有檔案系統的起點。
- **`/home`**：用戶主目錄，儲存每個用戶的個人資料和配置。
- **`/etc`**：配置檔案所在目錄，存放系統和應用程式的設定檔。
- **`/bin`** 和 **`/sbin`**：存放基本的系統和管理命令（如 `ls`、`cp`、`mv` 等）。
- **`/var`**：存放動態資料，如日誌檔案、快取和郵件隊列。
- **`/tmp`**：臨時檔案目錄，系統重啟後會自動清除其中的內容。
- **`/usr`**：存放用戶級別的應用程式和檔案，包含許多常用的命令和應用。
- **`/dev`**：存放系統的裝置檔案，像硬碟、網路介面等硬體裝置。

### 2. **權限與所有權**

Linux 是一個多用戶系統，檔案和目錄的權限控制對於保護系統安全至關重要。每個檔案和目錄都有三種權限級別：**擁有者**（Owner）、**群組**（Group）和**其他人**（Others）。

- **權限類型**：
  - `r` (read)：讀取權限。
  - `w` (write)：寫入或修改權限。
  - `x` (execute)：執行權限。

每個檔案和目錄的權限可以使用 `chmod` 命令來修改，並以 `chown` 修改擁有者。

#### 檔案權限範例：

```bash
-rw-r--r-- 1 user group 4096 Sep 22 09:30 file.txt
```

- 第一個字元 `-` 表示這是一個普通檔案。
- 後續字元表示擁有者、群組、和其他用戶的權限。
  - `rw-`：擁有者有讀寫權限。
  - `r--`：群組有讀權限。
  - `r--`：其他人有讀權限。

### 3. **進程管理**

Linux 是一個多任務系統，進程管理非常重要。進程是正在執行的程式，每個進程都有一個唯一的進程 ID（PID）。一些常見的進程管理指令包括：

- **`ps`**：查看系統中的進程。
  ```bash
  ps aux   # 顯示所有進程及其狀態
  ```
- **`top`**：實時查看系統進程和資源使用情況。
  ```bash
  top
  ```
- **`kill`**：結束進程。
  ```bash
  kill <PID>   # 終止指定 PID 的進程
  kill -9 <PID>   # 強制終止進程
  ```
- **`&`**：在背景執行進程。
  ```bash
  command &   # 將指令放到背景運行
  ```

### 4. **符號連結與硬連結**

- **符號連結（Symbolic Link）**：類似於 Windows 的快捷方式，它指向另一個檔案或目錄的位置。創建符號連結使用 `ln -s`。
  ```bash
  ln -s /path/to/original /path/to/link
  ```
- **硬連結（Hard Link）**：硬連結是指向相同檔案數據的不同檔案名，它們共享相同的 inode 編號。使用 `ln` 創建硬連結。
  ```bash
  ln /path/to/file /path/to/link
  ```

### 5. **Shell 和 Shell Script**

- **Shell** 是一個命令行解釋器，用戶通過 Shell 與系統進行互動。最常見的 Shell 是 **Bash**。
- **Shell Script** 是一組命令的集合，通常存儲在一個檔案中並且可以被執行。使用 Shell Script 可以自動化重複的任務和操作。
  - 編寫一個簡單的 Shell 腳本：
    ```bash
    #!/bin/bash
    echo "Hello, World!"
    ```
  - 執行腳本：
    ```bash
    chmod +x script.sh   # 賦予腳本執行權限
    ./script.sh          # 執行腳本
    ```

### 6. **軟體包管理**

在 Linux 系統中，使用軟體包管理器來安裝、更新和移除應用程式。不同的 Linux 發行版使用不同的包管理工具。

- **Debian/Ubuntu**：使用 `apt` 包管理器。
  ```bash
  sudo apt update       # 更新包列表
  sudo apt install nginx   # 安裝軟體包
  ```
- **Red Hat/CentOS**：使用 `yum` 或 `dnf` 包管理器。
  ```bash
  sudo yum install nginx   # 安裝軟體包
  ```

### 7. **日誌管理**

Linux 系統中的日誌文件存儲了系統、服務和應用程序的運行記錄，這對於排查問題和監控系統運行狀態非常重要。日誌通常存放在 `/var/log` 目錄下。

- **`/var/log/syslog`**：記錄系統級別的信息。
- **`/var/log/auth.log`**：記錄有關認證和安全的信息。

您可以使用 `less` 或 `tail` 來查看日誌檔案的內容：

```bash
tail -f /var/log/syslog   # 實時查看系統日誌
```

### 8. **管道與重定向**

- **管道（Pipe）**：管道 `|` 用來將一個命令的輸出作為另一個命令的輸入。例如：
  ```bash
  ls -l | grep ".txt"   # 將 ls 的結果通過管道傳遞給 grep 過濾 .txt 文件
  ```
- **重定向**：重定向用來將命令的輸出重定向到文件，或將文件內容作為命令的輸入。
  - 將輸出重定向到文件：
    ```bash
    ls > filelist.txt   # 將 ls 的輸出寫入 filelist.txt
    ```
  - 將文件內容作為輸入：
    ```bash
    cat < file.txt
    ```

### 9. **環境變數**

Linux 中的**環境變數**是影響系統和用戶會話的一些設定值。例如：

- **`$PATH`**：系統查找可執行文件的路徑。
- **`$HOME`**：用戶的主目錄。

您可以使用 `echo` 查看環境變數的值：

```bash
echo $PATH
```

### 10. **背景與前台進程**

在 Linux 中，命令可以在前台或背景運行：

- **前台運行**：命令會佔據終端，直到執行結束。
- **背景運行**：使用 `&` 將命令放入背景執行，這樣您可以繼續在終端中進行其他操作。
  ```bash
  command &   # 將命令放入背景執行
  ```

### 總結

這些基本概念涵蓋了 Linux 操作系統的核心組件和使用方式，從檔案系統、權限管理到進程和日誌管理，每一個都是理解和操作 Linux 系統的關鍵。如果您對某些概念有進一步的問題或想學習更深入的內容，隨時告訴我！

## 檔案與目錄操作相關指令

### ls 列出檔案

- `ls` 與 `ls -l` 的差異

```shell
user@MSI:/mnt/d/NCCU$ ls
'ArcGIS DATA'   VIDEO   mintpy_test   其他   大三   大四   研究所   研究計畫   自主學習   電子書

user@MSI:/mnt/d/NCCU$ ls -l
total 0
drwxrwxrwx 1 user user 4096 Aug 13 10:51 'ArcGIS DATA'
drwxrwxrwx 1 user user 4096 Sep  5 21:57  VIDEO
drwxrwxrwx 1 user user 4096 Sep 22 22:29  mintpy_test
drwxrwxrwx 1 user user 4096 Jun 20 20:17  其他
drwxrwxrwx 1 user user 4096 Sep 22 20:41  大三
drwxrwxrwx 1 user user 4096 Sep 22 20:41  大四
drwxrwxrwx 1 user user 4096 Sep  6 17:47  研究所
drwxrwxrwx 1 user user 4096 Sep 22 20:41  研究計畫
drwxrwxrwx 1 user user 4096 Apr 19 20:36  自主學習
drwxrwxrwx 1 user user 4096 Feb 28  2024  電子書
```

### cd 切換目錄

```shell
cd /home/user  # 切換到 /home/user 目錄
cd ..          # 返回到上級目錄
cd /           # 切換到根目錄
cd ~           # 切換到用戶主目錄
```

### pwd 顯示當前所在的目錄

```shell
user@MSI:/mnt/d/NCCU$ pwd
/mnt/d/NCCU
```

### mkdir 創建新目錄

```shell
mkdir newdir   # 創建名為 newdir 的目錄
mkdir -p dir1/dir2  # 創建嵌套目錄，如果上層目錄不存在，會自動創建
```

### rmdir 用於刪除空的目錄

如果目錄中有內容，需使用 rm -r。

```shell
rmdir newdir   # 刪除空目錄 newdir
```

### rm 刪除檔案或目錄

**用於刪除檔案或目錄，請小心使用。**

```shell
rm filename    # 刪除 filename 檔案
rm -r dirname  # 刪除目錄 dirname 及其內容 //這個方法特別強，要小心使用。
rm -f filename # 強制刪除檔案，不提示確認
```

### cp 複製檔案或目錄

```shell
cp file1 file2          # 複製 file1 為 file2
cp -r dir1 dir2         # 複製目錄 dir1 及其所有內容到 dir2
```

### mv 移動或重命名檔案

```shell
mv file1 newdir/        # 將 file1 移動到 newdir 目錄下
mv oldname newname      # 將檔案或目錄重命名為 newname
```

---

## 檔案查看相關指令

### cat 顯示檔案內容

用於顯示檔案的內容，適合查看較短的檔案。

```shell
cat filename            # 顯示 filename 的內容
```

### more 和 less 分頁查看檔案內容

```shell
more filename           # 向下查看檔案內容
less filename           # 支援向上/向下瀏覽檔案內容
```

### head 查看檔案的前幾行

```shell
head filename           # 查看檔案的前 10 行
head -n 20 filename     # 查看檔案的前 20 行
```

### tail 查看檔案的最後幾行

```shell
tail filename           # 查看檔案的最後 10 行
tail -n 20 filename     # 查看檔案的最後 20 行
tail -f filename        # 實時查看檔案的變化，常用於查看日誌
```

---

## 系統資訊相關指令

### df 查看磁碟空間使用情況

```shell
df -h                   # 以人類可讀的格式顯示磁碟空間使用情況
```

### du 查看檔案或目錄的磁碟使用情況

```shell
du -h dir               # 顯示目錄及其子目錄中每個檔案/目錄的大小
du -sh dir              # 只顯示目錄 dir 的總大小
```

### free 查看系統記憶體使用情況

```shell
free -h                 # 以人類可讀的格式顯示系統的記憶體使用情況
```

### top 實時顯示系統運行中的進程

```shell
top                     # 顯示系統運行中的進程以及 CPU 和記憶體的使用情況
```

---

## 權限相關指令

這些指令幫助您修改檔案或目錄的訪問權限。

### chmod 修改檔案或目錄的權限

```shell
chmod 755 filename      # 將檔案的權限設置為 755 (rwxr-xr-x)
chmod 644 filename      # 將檔案的權限設置為 644 (rw-r--r--)
```

### chown 修改檔案或目錄的擁有者

```shell
chown user:group filename   # 將檔案的擁有者設置為 user，組設置為 group
```

---

## 壓縮與解壓縮

這些指令幫助您對檔案進行壓縮和解壓縮。

### tar 打包與解壓縮檔案

```shell
tar -cvf archive.tar dir/   # 將 dir 目錄打包為 archive.tar
tar -xvf archive.tar        # 解壓縮 archive.tar
tar -czvf archive.tar.gz dir/   # 將 dir 目錄打包並壓縮為 archive.tar.gz
tar -xzvf archive.tar.gz    # 解壓縮 archive.tar.gz
```

---

## 關於後綴

以下是一些常見的 Linux 指令後綴（通常被稱為「選項」或「標誌」）及其含義的簡要說明，這些選項會改變指令的行為。

| 選項/後綴 | 作用                  | 說明                                               | 範例                  |
| --------- | --------------------- | -------------------------------------------------- | --------------------- |
| `-l`      | 列表形式顯示          | 以長格式顯示檔案和目錄的詳細資訊，如權限、大小等   | `ls -l`               |
| `-a`      | 顯示所有檔案          | 顯示目錄中的所有檔案，包括隱藏檔案（以`.`開頭）    | `ls -a`               |
| `-h`      | 人類可讀格式          | 顯示檔案大小等資訊時，使用人類可讀的格式（KB、MB） | `ls -lh`, `df -h`     |
| `-p`      | 顯示目錄的斜線標記    | 在目錄名稱後面加上斜線 (`/`)                       | `ls -p`               |
| `-r`      | 遞迴處理              | 遞迴處理目錄或反轉顯示順序                         | `cp -r`, `ls -r`      |
| `-f`      | 強制執行              | 強制執行操作，不提示確認                           | `rm -f`               |
| `-n`      | 指定行數              | 指定顯示或操作的行數                               | `head -n 10`          |
| `-v`      | 顯示詳細過程          | 顯示詳細的操作過程資訊                             | `cp -v`, `mv -v`      |
| `-t`      | 按時間排序            | 依據時間排序檔案，通常是根據修改時間               | `ls -lt`              |
| `-u`      | 按使用者排序          | 依據使用者排序檔案或顯示屬於指定使用者的檔案       | `ps -u username`      |
| `-k`      | 以 KB 顯示            | 以 KB 顯示檔案大小或輸出結果                       | `du -k`               |
| `-d`      | 顯示目錄資訊          | 只顯示目錄的資訊，而不顯示其內的內容               | `du -d 1`, `ls -d */` |
| `-q`      | 靜默模式              | 不顯示任何訊息或輸出，只在錯誤時輸出訊息           | `cp -q`, `rm -q`      |
| `-s`      | 顯示總計              | 顯示檔案或目錄的總大小                             | `du -s`               |
| `-i`      | 顯示 inode 編號       | 列出檔案或目錄時，同時顯示它們的 inode 編號        | `ls -i`               |
| `-c`      | 以字元為單位          | 將操作的單位設置為字元                             | `wc -c`               |
| `-x`      | 嚴格篩選/排除某些範圍 | 過濾某些條件，或排除特定檔案                       | `ls -x`, `tar -xvf`   |

### 說明：

- **`-l`（長格式顯示）**：顯示詳細資訊，如檔案權限、擁有者、大小、修改時間等，常用於 `ls` 指令。
- **`-a`（顯示所有檔案）**：包括隱藏檔案（以`.` 開頭），在顯示檔案列表時非常有用。
- **`-p`（顯示目錄的斜線標記）**：在目錄名稱後加上斜線，便於區分檔案和目錄。
- **`-r`（遞迴處理或反轉順序）**：例如 `ls -r` 顯示反序列出的檔案，`cp -r` 遞迴複製目錄及其內容。
- **`-f`（強制執行）**：通常用於強制刪除檔案或進行其他操作時，不會提示確認。
- **`-h`（人類可讀格式）**：將檔案大小等資訊以 KB、MB 等格式顯示，使其更容易閱讀。
- **`-v`（顯示詳細過程）**：輸出詳細的操作過程，有助於了解執行中的步驟。

這些選項可以與指令組合使用來更靈活地操作檔案和目錄。如果您需要了解某個特定指令的選項，通常可以使用 `man` 指令查看該指令的詳細說明。例如，查看 `ls` 指令的手冊：

```bash
man ls
```

這樣可以幫助您了解每個指令的具體選項和使用方式。如果您有其他指令的問題或想了解更進階的內容，隨時告訴我！
