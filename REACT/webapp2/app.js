console.log("hi zhs");


var express = require('express');
var path = require('path');
var app = express();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname, '/test.html'));
});

app.listen(4000, function() { console.log('listening'); });
