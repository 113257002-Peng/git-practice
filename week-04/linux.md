# Linux 基本指令

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
