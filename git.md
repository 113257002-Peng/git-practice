# 名詞解釋

---

1. Blob(Binary Large Object)

   > 在 Git 中，Blob 是用來存儲文件資料的基礎單位物件。每一個 Blob 表示的是一個文件的**內容**物件。  
   > 存儲時會在 object 內，以檔案的內容 hash 成一串雜湊碼，其中前兩碼會變成資料夾名稱。  
   > 後面剩餘的雜湊碼會變成檔案名稱。

2. Tree

   > Tree 是一個表示目錄結構的物件，主要可以記錄目錄名稱、檔案名稱，以及與檔案內容所產生的 hash 的 blob 以及其他 tree 之間的關係。同樣生成一串 hash。

3. Commit

   > 簡單來說，commit 後會生成一個 commit 物件。主要記錄了有關每次 commit 需要有的資訊。(像是提交者的訊息、提交的時間戳也包含了該次變更的 Tree 物件，也包含一個指向父 commit(應該說就是前面那個父 commit)的 Hash 值。)

4. Branch

   > 我認為 Branch 的概念更像是一個指標，而非分支。當我創建了一個叫做 dev 的指標，我再次做 commit 的時候，這個指標就會指向我最新的這個 commit。
   > 舉例來說: 一個 repo 裡面可能會含有許多 branch 指標(後面稱 pointer)，而每次的 commit 都需要決定你要使用哪個 pointer 譬如 dev 這個 pointer。確定好後等我 commit 後這個 dev 的 pointer 就會來指向我這個新的 commit。
   > 所以只要我切換 Branch 就有點像是我更改了指標，然後針對更改的指標讓其指向新的 commit。

5. Head
   > Head 是一個指向當前分支上最新 Commit 的指針，指示目前所在的工作位置。
   > 就以前面所舉的例子: 【切換 Branch 就有點像是我更改了指標，然後針對更改的指標讓其指向新的 commit。】
   > 在切換時移動的是 Head 指標，會去指向你所指定的 Branch 中最新的 commit，每當我提交或合併時，就會使 Branch 指向最新的 Commit。

---

# git repo 操作過程

---

### 基本 add、commit 操作

1. 首先單針對空的 workspace 做 init。

   - 出現.git 檔案，裡面的 Object 資料夾內只有**info**以及**pack**
     ![git_init](https://github.com/113257002-Peng/git-practice/blob/main/git_init.jpg?raw=true "git_init")

2. 新增一個 test.py 檔案，並且沒有任何內容。進行**git add**

   - 出現一個新的 object 資料夾名稱為 e6，裡面的資料名稱為 9de29bb2d1d6434b8b29ae775ad8c2e48c5391。
   - 當我執行 **git hash-object test.py**時，出現的 hash 結果為: e69de29bb2d1d6434b8b29ae775ad8c2e48c5391。由此可知，資輛夾名稱為雜湊後前兩個字，檔案名稱也確實為剩餘的其他 hash 值。
   - 當我執行 **git cat-file -t e69de29bb2d1d6434b8b29ae775ad8c2e48c5391**時，結果出現**blob**，也就是說，檔案內即使沒有內容，也算是一種內容所以也被紀錄為一種物件。
     ![git_add](https://github.com/113257002-Peng/git-practice/blob/main/git_add.jpg?raw=true "git_add")

3. 再來我要測試 commit，理論上應該會出現再出現兩個物件分別代表 tree 以及 commit。

   - 確實出現兩個物件資料夾分別為**f2、d3**
   - **git cat-file -t**的結果顯示

     - f 2: git cat-file -t **f2cd1a8eedc1a44645496cffd6875deb64772999** >>> **_commit_**
     - d3: git cat-file -t **d3b424d952ddeecc16c6953e0757acfa1c19a6f9** >>> **_tree_**

   - 如同剛開始所想，d3 記錄了檔案名稱與資料結構的訊息加上 test.py 內容所形成的 blob hash。
     ![git_commit_info](https://github.com/113257002-Peng/git-practice/blob/main/git_commit_info.jpg?raw=true "git_commit_info")

4. 再來我要測試如果新增一個新的空資料夾。

   - 照理來說執行 git add .應該不會有任何新增，因為沒有內容可以新增城 blob。結果也確實沒有。
   - 而執行 commit 一定也不會有任何動作，因為 add 並沒有新增任何暫存。

---

### 創建 Branch 觀察變化

1. 創建新的 Branch 並且 commit。

```
git branch newBranch
```

在**logs/refs/heads** 資料夾底下出現新的 Branch「newBranch」。
且新的 Branch 會保留原本 Branch 最後一個 commit 的資料。
如果需要改變分支必須要使用指令:

```
# 切換分支(下面兩個指令都可以轉換branch分支)
$ git switch newBranch
$ git checkout newBranch
```

- 切換完成後再重新對資料做更動並進行 add commit。就會更新目前指向的 Branch 裡的最新 commit 資料。

2. 修改 Branch 名稱:

```
git branch -m old_name new_name
```

- 在 **heads** 資料夾內的 Branch 會直接更動名稱。

---

### 移除檔案觀察變化

1. 新增一個新的檔案並且 **git add .** 之後再 **git rm -f 檔案名稱**

   - 結果我發現已經新增的物件就不會刪除了。
   - 要直到 git 認為這些是垃圾才會把這些沒用到的物件刪除，指令為:

     ```
     git gc
     ```
