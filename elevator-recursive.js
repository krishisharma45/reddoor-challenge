let weightStack = [];
let floorStack = [];
let stops = 0;

function calculateStops(maxPeople, maxWeight, weightQueue, floorQueue){
  if (floorQueue.length === 0){
    stops+=new Set(floorStack).size + 1;
    return stops;
  }
  else{
    totalWeight = weightStack.reduce((a, b) => a + b, 0) + weightQueue[0];
    if ((weightStack.length < maxPeople) && (totalWeight <= maxWeight)){
      weightStack.push(weightQueue.shift());
      floorStack.push(floorQueue.shift());
    }
    else{
      let floorSet = new Set(floorStack);
      stops+=floorSet.size + 1;
      weightStack = [];
      floorStack = [];
    }
    return calculateStops(floorQueue.shift());
  }
}

let A = [200, 200, 30, 40, 60, 60, 30, 50];
let B = [3, 3, 2, 4, 5, 2, 2, 3];
let maxPeople = 3;
let maxWeight = 200;

stops = calculateStops(maxPeople, maxWeight, A, B);
console.log('Number of Stops: ', stops);
