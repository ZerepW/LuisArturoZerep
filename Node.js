var express = require("express");

var app = express();

app.get("/",function(req,res){
    res.send("Hola!"); //manda y cierra la conexion
});

app.listen(7780);   