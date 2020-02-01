const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

//var answer = a + b;

app.get("/", function (request, response){
  response.sendFile(__dirname + "/elevator.html");
});

app.post("/elevator.html", function(request, response){
  var num1 = Number(request.body.maxPeople);
  var num2 = Number(request.body.maxWeight);
  var weight = new Array(request.body.A);
  var floor = new Array(request.body.B);
  var answer = num1 + num2;
  response.send("The result is " + answer);
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
