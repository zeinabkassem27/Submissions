var express = require("express");
var app = express();

app.get('/', (req, res)=>{
    res.send('hello world'); 
});

app.get('/test', (req, res)=>{
    res.json({status:200, message:"hello"}); 
});

app.get('/time', (req, res)=>{
    res.json({status:200, message:new Date().getHours() +":"+new Date().getMinutes()}); 
});

app.get('/hello/', (req, res)=>{
    res.json({status:200, message:"hello " + req.params.id}); 
});

app.get('/search', (req, res)=>{
    const s=req.query.s;
    if(s)
    res.json({status:200, message:"ok",data:s}); 
    else{
        res.status(500).json({
            status:500,
            error:true,
            message:"you have to provide a search"
        })
    }
});

// Only works on 3000 regardless of what I set environment port to or how I set [value] in app.set('port', [value]).
app.listen(5050);