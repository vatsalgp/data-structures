const Graph = require("./Graph");

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "D", 1);
graph.addEdge("C", "E", 2);
graph.addEdge("D", "E", 1);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 2);

console.log("Shortest path from A to E");
graph.shortestPath("A", "E");
// // A -> B
// // B -> D
// // D -> E

console.log("DFS Recursive from A");
console.log(graph.DFSRecursive("A"));
// // [ 'A', 'B', 'D', 'E', 'C', 'F' ] Left next Right 7.2 ms

console.log("DFS Iterative from A");
console.log(graph.DFSIterative("A"));
// // [ 'A', 'C', 'E', 'F', 'D', 'B' ] Right next left 0.2 ms

console.log("BFS from A");
console.log(graph.BFS("A"));
// // [ 'A', 'B', 'C', 'D', 'E', 'F' ] Left Right next 0.2 ms
