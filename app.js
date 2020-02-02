const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (request, response){
  response.sendFile(__dirname + "/elevator.html");
});

app.post("/", function(request, response){
  let maxPeople = Number(request.body.maxPeople);
  let maxWeight = Number(request.body.maxWeight);
  let weight = request.body.A;
  let floor = request.body.B;
  let weightQueue = weight.split(',').map(Number);
  let floorQueue = floor.split(',').map(Number);

  //elevator.js logic
  function calculateStops(maxPeople, maxWeight, weightQueue, floorQueue){
    let weightStack = [];
    let floorStack = [];
    let stops = 0;
    while (weightQueue.length){
      totalWeight = weightStack.reduce((a, b) => a + b, 0) + weightQueue[0];
      if ((weightStack.length < maxPeople) && (totalWeight <= maxWeight)){
        weightStack.push(weightQueue.shift());
        floorStack.push(floorQueue.shift());
      }
      else{
        //console.log(weightStack);
        stops+=new Set(floorStack).size + 1;
        weightStack = [];
        floorStack = [];
        //console.log(stops);
      }
    }
    if (floorStack.length != 0){
      stops+=new Set(floorStack).size + 1;
      return stops;
    }
    return stops;
  }
  stops = calculateStops(maxPeople, maxWeight, weightQueue, floorQueue);
  response.send("The elevator stops " + stops + " times.");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
