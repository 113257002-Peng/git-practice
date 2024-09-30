function doJob(job, time, cb) {
  setTimeout(() => {
    // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
// write your code here
doJob("刷牙", 1000, function (data) {
  console.log(data);
  doJob("吃早餐", 3000, function (data) {
    console.log(data);
    doJob("寫功課", 1000, function (data) {
      console.log(data);
      doJob("吃午餐", 2000, function (data) {
        console.log(data);
      });
    });
  });
});

/* 
我對回呼函式的認知就是將dunction變為參數然後去參與其他函式的內容，
譬如這邊的data代表的就是cb(`完成工作 ${job} at ${now.toISOString()}`)裡面的【`完成工作 ${job} at ${now.toISOString()}`】
callback function在javascript撰寫前端後端時蠻常使用到的，像是常用事件的監聽，譬如滑鼠點擊某個button要觸發的反應可能是一個函式，
這個時候就會用到。
*/

/*
解題想法:
這題其實概念很好懂，主要是在於觸發玩callback function後須要繼續下一個動作，
所以我很自然地就這樣撰寫了。
*/
