/*
參考網址: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
/* 
reduce函式
reduce(f(y1,y2),x1)
reduce 這個函式所接收的兩個參數，第一個是一個被稱作callback function(回乎函式)的function，這個function接收兩個參數y1及y2。
這兩個參數分別為accumulator以及currentValue。
1. accumulator：累積器，用來累加或累積每次運算後的結果。
2. currentValue：目前正在被處理的陣列元素。
而reduce的第二個參數x1則是acc的初始值，譬如說我如果設置100，那他就會從100開始累加。
*/

// 基本概念
function sumReducer(accumulator, current) {
  return accumulator + current;
}

function sum(arr) {
  return arr.reduce(sumReducer, 0);
}

console.log("使用reduce: " + sum([1, 2, 3, 4, 5])); // 輸出: 15

// 更簡潔的寫法(直接利用arrow function，正常應該都會用這個方式，畢竟沒理由需要為「acc + curr」特別命名)
function sum_2(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log("使用reduce_簡化版: " + sum_2([1, 2, 3, 4, 5, 100])); // 輸出: 115

// 其他方法(直接問GPT)
/*
eval 函式: 將字串作為 JavaScript 代碼來執行。
map 函式: 將陣列中的每個元素透過一個回呼函式進行轉換，並返回一個新的陣列。map 不會改變原始陣列，而是生成一個新的陣列。
join 函式: 用來將陣列中的所有元素轉換為字串，並用指定的分隔符將這些元素連接在一起。
---
sum_3的概念有點好笑，大概就是利用map遍歷每個arr的元素，然後用join指定 "+" 把它們串在一起變成string。最後利用eval把字串變成JS可以執行的程式碼。
最後就可以計算了。
而且GPT一直說eval有安全性問題，要我盡量避免使用。查了以下的資料發現問題大概是因為他很方便可以把任何可以以值形成JS的字串都執行。
所以會有很嚴重的資安風險。
連結: https://netivism.com.tw/blog/515
*/
function sum_3(arr) {
  return eval(arr.map((num) => num).join("+"));
}

console.log("使用eval + map + join: " + sum_3([1, 2, 3, 4, 5, 200])); // 輸出: 215

/*
forEach 函式: 用於對陣列中的每個元素執行指定的操作。
與傳統的 for 迴圈不同，forEach 更加簡潔且可讀性更高，
適合用於需要對每個元素進行相同處理的情況。
*/
function sum_4(arr) {
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  return total;
}

console.log("使用 forEach(): " + sum_4([1, 2, 3, 4, 5, 300])); // 輸出: 315

// 挑戰提 input 是 n 回傳 1 + 2 + 3 + ... + n
/*
基本概念: 直接想到的就是利用遞迴(recursion)或是公式解
*/
function sum_recursion(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + sum_recursion(n - 1);
  }
}
console.log("使用sum_recursion: " + sum_recursion(100)); // 5050

function sum_formula(n) {
  if (n <= 1) {
    return n;
  } else {
    return ((n + 1) * n) / 2;
  }
}
console.log("使用sum_formula: " + sum_formula(101)); // 5151
