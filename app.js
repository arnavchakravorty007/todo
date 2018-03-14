var express = require('express');
var app = express();

app.use(express.static('public'))

var array1 = [];
app.get("/user",function(req,res){
   array1.push(req.query.user);
   res.send(array1);
   console.log(req.query.user);
})


app.listen(8080,function(){
	console.log("Server Started")
})