var express = require("express");
var fs = require("fs");

var app = express();

app.get("/",function(req,res){
    fs.readFile("index.html",function(err,data){
        res.end(data); //manda y cierra la conexion
    });
});

app.listen(7781);   