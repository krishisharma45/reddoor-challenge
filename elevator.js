function calculateStops(maxPeople, maxWeight, weightQueue, floorQueue){
  let weightStack = [];
  let floorStack = [];
  let stops = 0;
  while (weightQueue.length){
    totalWeight = weightStack.reduce((a, b) => a + b, 0) + weightQueue[0];
    if ((weightStack.length < maxPeople) && (totalWeight < maxWeight)){
      weightStack.push(weightQueue.shift());
      floorStack.push(floorQueue.shift());
    }
    else{
      var floorSet = new Set(floorStack);
      stops+=floorSet.size + 1;
      weightStack = [];
      floorStack = [];
    }
  }
  stops+=floorStack.length + 1;
  return stops;
}

var A = [60, 80, 40];
var B = [2, 3, 5];
var maxPeople = 2;
var maxWeight = 200;

stops = calculateStops(maxPeople, maxWeight, A, B);
console.log('Number of Stops: ', stops);
