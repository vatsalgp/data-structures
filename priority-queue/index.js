const PriorityQueue = require("./PriorityQueue");

let PQ = new PriorityQueue();
PQ.enqueue("common cold  ", 5);
PQ.enqueue("gunshot wound", 1);
PQ.enqueue("high fever   ", 4);
PQ.enqueue("broken arm   ", 2);
PQ.enqueue("glass in foot", 3);
console.log("Original:", PQ.queue);
PQ.dequeue();
console.log("After deletion:", PQ.queue);

// Original: [
//     Node { value: 'gunshot wound', priority: 1 },
//     Node { value: 'broken arm   ', priority: 2 },
//     Node { value: 'high fever   ', priority: 4 },
//     Node { value: 'common cold  ', priority: 5 },
//     Node { value: 'glass in foot', priority: 3 }
//   ]
//   After deletion: [
//     Node { value: 'broken arm   ', priority: 2 },
//     Node { value: 'glass in foot', priority: 3 },
//     Node { value: 'high fever   ', priority: 4 },
//     Node { value: 'common cold  ', priority: 5 }
//   ]