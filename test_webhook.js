'use strict'
const line = require('./index')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var linkd
var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.imgur.com",
  "port": null,
  "path": "/3/album/UrauW",
  "headers": {
    "authorization": "Client-ID 0c926e905ae8698"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks)
    //console.log(body.toString());
    body = JSON.parse(body);
    console.log(body.data.images)
    linkd = body.data.images[body.data.images.length-2].link
    console.log(body.data.images.length)
    console.log(linkd)
  });
});

req.end();
// need raw buffer for signature validation
app.use(bodyParser.json({
  verify (req, res, buf) {
    req.rawBody = buf
  }
}))


// init with auth
line.init({
  accessToken: 'c/XMmaPokDjHzMTNmPed0Mjtf3UZ8S/9+tTB08iIELrmaP5vydkuPLQVPMat1cfVV4H4dfFph4sc1S91OSOg8PWmSg1JbGIyXP7WJvZ1e2X3LJ0zCdKQsk4OS0QkCzlvVY3GqF8UOPa6hGJixR99KgdB04t89/1O/w1cDnyilFU=',
  // (Optional) for webhook signature validation
  channelSecret: '22fc220ce651793e6b4a546b028a230a'
})

/**
 * response example (https://devdocs.line.me/ja/#webhook):
 * {
 *   "events": [
 *     {
 *       "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
 *       "type": "message",
 *       "timestamp": 1462629479859,
 *       "source": {
 *         "type": "user",
 *         "userId": "u206d25c2ea6bd87c17655609a1c37cb8"
 *       },
 *       "message": {
 *         "id": "325708",
 *         "type": "text",
 *         "text": "Hello, world"
 *       }
 *     }
 *   ]
 * }
 */

app.post('/webhook/', line.validator.validateSignature(), (req, res, next) => {
  // get content from request body
  const promises = req.body.events.map(event => {
    // reply message


    console.log('2: ',linkd)

    
    return line.client
      .replyMessage({
        replyToken: event.replyToken,
        messages: [
          {
            type: 'text',
            text: event.message.text
          },
          {
            type: "image",
            originalContentUrl: linkd.replace("http", "https"),
            previewImageUrl: linkd.replace("http", "https")
          }
        ]
      })
  })
  Promise
    .all(promises)
    .then(() => res.json({success: true}))
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!')
})
