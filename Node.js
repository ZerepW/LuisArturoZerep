var express = require("express");
var fs = require("fs");

var app = express();

app.get("/",function(req,res){
    res.sendFile("index.html",{root: __dirname});
});

app.listen(80);   