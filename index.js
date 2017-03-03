var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1497331036,
  channelSecret: ebfa184157e5443aba64a5e0e7c24426,
  channelAccessToken: Jt6bDMLf/kytN1GOqzdX3338nKDS8h1POV3RSu8HW9fJcx3TplCPSzLHomgY0tVHVl6pCz+gtZG1mockr1g6ymFMCxZhQBDXpsitsySypoNGDVMo4yQXggxVqdiX+PMKqDaCzuw6UNugOMAAZmahsQdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});