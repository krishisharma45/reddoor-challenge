
function createCoordinates(rect){
  var xArray = [];
  var yArray = [];
  for (let i=0; i<rect.length; i++){
    xArray.push(rect[i][0]);
    yArray.push(rect[i][1]);
  }
  return [xArray, yArray];
}

function getTopLeft(rect){
  var xCoord = createCoordinates(rect)[0];
  var yCoord = createCoordinates(rect)[1];
  minX = Math.min.apply(null, xCoord);
  maxY = Math.max.apply(null, yCoord);
  var topLeft = [minX, maxY];
  return topLeft;
};

function getBottomRight(rect){
  var xCoord = createCoordinates(rect)[0];
  var yCoord = createCoordinates(rect)[1];
  maxX = Math.max.apply(null, xCoord);
  minY = Math.min.apply(null, yCoord);
  var bottomRight = [maxX, minY];
  return bottomRight;
}

function checkOverlap(rect1, rect2){
  var bottomRight1 = getBottomRight(rect1);
  var bottomRight2 = getBottomRight(rect2);
  var topLeft1 = getTopLeft(rect1);
  var topLeft2 = getTopLeft(rect2);
  if ((topLeft1[0] > bottomRight2[0]) || (topLeft2[0] > bottomRight1[0])){
    return false;
  }
  if ((topLeft1[1] < bottomRight2[1]) || (topLeft2[1] < bottomRight1[1])){
    return false;
  }
  return true;
}

function displayResult(rect1, rect2){
  if (checkOverlap(rect1, rect2) === true){
    return "Rectangles overlap!";
  }
  else{
    return "Rectangles do not overlap!";
  }
}

//do overlap
var rect1 = [[0,0], [0,2], [3,0], [3,2]];
var rect2 = [[2,0], [2,2], [6,0], [6,2]];

//do not overlap
var rect3 = [[0,0], [-3, 0], [-3, -2], [0,-2]];
var rect4 = [[2,0], [2, 2], [6, 0], [6,2]];

//do overlap
var rect5 = [[1,0], [1,2], [-4, 2], [-4,0]];
var rect6 = [[0,1], [0,3], [3,1], [3,3]];

//do not overlap
var rect7 = [[-1,4], [-1,2], [-5,2], [-5,4]];
var rect8 = [[-1,-1], [-1,-3], [-6,-1], [-6,-3]];

//do not overlap
var rect9 = [[3,-1], [3,1], [7,-1], [7,1]];
var rect10 = [[1,-1], [4,-1], [1, -3], [4,-3]];

console.log(getTopLeft(rect9), getTopLeft(rect10));
console.log(getBottomRight(rect9), getBottomRight(rect10));
console.log(displayResult(rect9, rect10));
