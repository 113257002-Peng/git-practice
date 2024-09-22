// stack.js
export default class Stack {
  // # 是私有屬性宣告符號，表示 items 是這個類的私有屬性(這樣才不會被外部修改，詳細介紹請見note.md)
  #items;

  constructor() {
    this.#items = []; // 使用array來存放 stack 元素
  }

  // 在 stack 頂部加入元素
  push(element) {
    // 使用array的 push 方法，就是可以把元素一直加到array後面。
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    // 使用array的 pop 方法
    return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    // 取得array的最後一個元素，直接用index最快
    return this.#items[this.#items.length - 1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    // 檢查array長度是否為 0，直接回傳布林值
    return this.#items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    // 回傳array長度
    return this.#items.length;
  }

  // 清空 stack
  clear() {
    // 將array重設為空的array就直接清空了
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    // 印出array元素，這邊不用console.log因為main的操作可以比較有彈性。
    return this.#items.toString();
  }
}
