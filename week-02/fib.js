function fib(n) {
  if (n <= 1) {
    // 處理第0、第1項
    return n;
  } else {
    // 其他項遞迴處理
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 15
console.log(fib(10)); // 55

// 查詢GPT後有另一個做法
function fib_2(n) {
  let a = 0, // 前一項
    b = 1; // 後一項
  for (let i = 0; i < n; i++) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return a;
}

console.log(fib_2(5)); // 輸出: 5
