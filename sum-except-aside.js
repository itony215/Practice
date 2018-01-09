/*sum-except-aside
var ball = [];
ball[0] = 1
ball[1] = 5
ball[2] = 2
ball[3] = 1
ball[4] = 7
假設我選擇 ball[1] 左右的 ball[0] ball[2] 不列入計算 剩下做相加 回傳結果: ball[1]+ball[3]+ball[4]=5+1+7 */

var ball = [];
ball[0] = 1;
ball[1] = 5;
ball[2] = 2;
ball[3] = 1;
ball[4] = 7;
//method_1
var selected = 1;
var sum = ball.reduce((a, b) => a + b);
if (selected > 0) {
  sum -= ball[selected - 1];
}
if (selected < ball.length) {
  sum -= ball[selected + 1];
}
//method_2
/*
var selected = 1;
var sum = 0;
for (var idx = 0; idx < ball.length; idx++) {
  if (Math.abs(idx - selected) === 1) {
    continue;
  }
  sum += ball[idx];
  console.log(ball[idx]);
}
*/
