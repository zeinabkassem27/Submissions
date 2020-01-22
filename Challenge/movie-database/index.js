var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send('hello world'); 
});

// Only works on 3000 regardless of what I set environment port to or how I set [value] in app.set('port', [value]).
app.listen(3030);