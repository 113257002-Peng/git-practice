import Stack from "./stack.js";

let stack = new Stack();

console.log("-----------------------------");
// 測試push()，因為是直接加到arr的後方，所以每次的push應該都會增加至arr尾部
console.log("測試push函式");
stack.push(1);
stack.push(2);
stack.push(3);
console.log("新增3個元素的array: " + stack.print());
console.log("-----------------------------");

// 測試 pop()，因為是先進後出，代表我後進的會先出，所以先push(10)在pop()理論上會把10抓出來
console.log("測試push函式");
stack.push(10);
console.log("原始array: " + stack.print());
console.log("提取的element: " + stack.pop());
console.log("提取元素10後的array: " + stack.print());
console.log("-----------------------------");

// 測試peek()，因為是拿最後一個元素出來，所以理論上不應該更改原始array
console.log("測試peek函式");
console.log("原始array: " + stack.print());
console.log("peek元素: " + stack.peek());
console.log("peek後的array: " + stack.print());
console.log("-----------------------------");

//測試isEmpty()
console.log("測試isEmpty函式");
let stack_2 = new Stack();
console.log("stack array是否為空: " + stack.isEmpty()); // false
console.log("stack_2 array是否為空: " + stack_2.isEmpty()); // true
console.log("-----------------------------");

//測試size()
console.log("測試size函式");
console.log("stack array長度: " + stack.size()); // 3
console.log("stack_2 array長度: " + stack_2.size()); // 0
console.log("-----------------------------");

//測試clear()
console.log("測試clear函式");
console.log("stack array before clear: " + stack.print());
console.log("The length of stack array before clear: " + stack.size());
stack.clear();
console.log("----------After clear------------");
console.log("stack array after clear: " + stack.print());
console.log("The length of stack array after clear: " + stack.size());
console.log("-----------------------------");

/*-------------------*/
//補充測試: 對一個空的array做pop
let stack_3 = new Stack();
console.log("提取前的array: " + stack.print());
console.log("提取前array的長度: " + stack.size());
console.log("---------提取後----------");
console.log("提取的element: " + stack.pop());
console.log("提取後的array: " + stack.print());
console.log("提取後array的長度: " + stack.size());
console.log("-----------------------------");
