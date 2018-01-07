var num = ["1", "2", "3", "4", "4", "6", "35"];
//過濾出重複的數字 回傳結果顯示重複數字
let dupNumbers = [
  ...new Set(num.filter(ele => num.indexOf(ele) !== num.lastIndexOf(ele)))
];

let nodupNumbers = [...new Set(num)];
console.log(dupNumbers);
console.log(nodupNumbers);
