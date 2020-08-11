const MaxBinaryHeap = require("./MaxBinaryHeap");

let heap = new MaxBinaryHeap();
heap.push(3);
heap.push(1);
heap.push(99);
heap.push(4);
heap.push(2);
heap.push(5);
console.log("Original:", heap);
heap.pop();
console.log("After Poping:", heap);

// Original: MaxBinaryHeap { values: [ 99, 4, 5, 1, 2, 3 ] }
// After Poping: MaxBinaryHeap { values: [ 5, 4, 3, 1, 2 ] }