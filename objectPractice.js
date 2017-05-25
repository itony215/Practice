const MEMBER = {'andy':'Ue9c584', '開心': 'happ', '哭': 'cry'};//物件
const thisone = 'cry';//輸入或找到的值
let matchProp = '';

if (thisone) {
      let isMatch = false;
      
      Object.keys(MEMBER).forEach((prop) => {
        if (isMatch) {
          return;
        }
        isMatch = theone.indexOf(prop) >= 0;
        if (isMatch) {
          matchProp = prop;
        } 
      })
  }

console.log('matchProp',matchProp);

