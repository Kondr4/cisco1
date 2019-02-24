var express = require('express');
var bodyParser = require('body-parser');
let publish = require("../a/mqtt");
var app = express()
app.use(bodyParser.text({
    type: 'text/plain'
}))
app.post('/light', function (req, res) {
    publish("esplight", req.body);
    res.send("odeslano")
})
app.post('/temp', function (req, res) {
    publish("esptemp", req.body)
})


app.listen(3000);
console.log("listening on 3000");
