var express = require("express");

var app = express();

app.use(express.static('img'));
app.get("/",function(req,res){
    console.log(path.join(__dirname, 'img'));
    res.sendFile("index.html",{root: __dirname});
});

app.listen(8000);   