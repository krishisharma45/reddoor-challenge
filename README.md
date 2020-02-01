# reddoor-challenge
This contains the challenge problems for a technical take-home interview.

## Elevator Challenge
There is an elevator in a building with M floors. This elevator can take a max of X people at a time or max of total weight Y. Given that a set of people and their weight and the floor they need to stop, how many stops has the elevator taken to serve all the people? Consider the elevator serves in “first come first serve” basis and the order for the queue cannot be changed.

### Example
Let Array A be the weight of each person A = [60, 80, 40].
Let Array B be the floors where each person needs to be dropped off B = [2, 3, 5].

The building has 5 floors, maximum of 2 persons are allowed in the elevator at a time with max weight capacity being 200. For this example, the elevator would take total of 5 stops in floors: 2, 3, G, 5 and finally G.

#### Constraints
A persons' weight is between 0 < weight < 200. Each array must contain at least one element.

## Rectangles Challenge
Write a program that checks if two rectangles are overlapping with each other or not. The input will be two nested arrays, each representing coordinates of a rectangle. Rectangles that share at most one side are not considered to be overlapping. Rectangles that share all sides are considered overlapping.

### Example
Let rectangle1 be [[0,0], [-3, 0], [-3, -2], [0,-2]].
Let rectangle2 be [[2,0], [2, 2], [6, 0], [6,2]].

These rectangles do not overlap.

#### Constraints
The constraints are that the rectangles must be parallel to the coordinate axis and must have 4 distinct coordinates.

