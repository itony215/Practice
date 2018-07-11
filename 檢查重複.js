var origin = [1, 2, 'a', 3, 1, 'b', 'a'];
let result = {}
origin.forEach((item)=>{
  result[item] = result[item]? result[item] +1:1
})

console.log(Object.keys(result))

// 等於=============================
origin.forEach((item) => {
  if (result[item]) { // 判斷result[item] 是否存在
    result[item] = result[item] + 1
  }else{
    result[item] = 1
  }
})