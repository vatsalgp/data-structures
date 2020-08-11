//Undirected Weighted Graph using Adjacency List
const PriorityQueue = require("../priority-queue/PriorityQueue");

class Graph {
    //Data Members
    nodes = {};
    /*
    nodes = {
        node : [{dest, weight}]
    }
    */

    //Member Functions
    addVertex(v) {
        if (!this.vertexExists(v))
            this.nodes[v] = [];
    }
    addEdge(v1, v2, w) {
        if (this.vertexExists(v1) && this.vertexExists(v2)) {
            if (!this.edgeExists(v1, v2)) {
                this.nodes[v1].push({ dest: v2, weight: w });
                this.nodes[v2].push({ dest: v1, weight: w });
            }
        }
    }
    vertexExists(v) {
        return this.nodes[v];
    }
    edgeExists(v1, v2) {
        if (this.vertexExists(v1) && this.vertexExists(v2)) {
            for (const node of this.nodes[v1]) {
                if (node.dest === v2)
                    return true;
            }
        }
        return false;
    }
    removeEdge(v1, v2) {
        if (this.edgeExists(v1, v2)) {
            const deleteNode = (v1, v2) => {
                const i = 0;
                for (const { length } = this.nodes[v1]; i < length; i++) {
                    if (this.nodes[v1][i].dest === v2) {
                        break;
                    }
                }
                this.nodes[v1].splice(i, 1);
            };
            deleteNode(v1, v2);
            deleteNode(v2, v1);
        }
    }
    removeVertex(v1) {
        if (this.vertexExists(v1)) {
            for (const v2 of [...this.nodes[v1]]) {
                this.removeEdge(v1, v2.dest);
            }
            delete this.nodes[v1];
        }
    }
    DFSRecursive(vertex) {
        if (this.vertexExists(vertex)) {
            const visited = [];
            const DFS = vertex => {
                if (vertex) {
                    visited.push(vertex);
                    for (const sibling of this.nodes[vertex]) {
                        if (!visited.includes(sibling.dest)) {
                            DFS(sibling.dest);
                        }
                    }
                }
            };
            DFS(vertex);
            return visited;
        }
    }
    DFSIterative(vertex) {
        if (this.vertexExists(vertex)) {
            const stack = [vertex];
            const visited = [];
            while (stack.length) {
                const vertex = stack.pop();
                if (!visited.includes(vertex)) {
                    visited.push(vertex);
                    this.nodes[vertex].forEach(v => stack.push(v.dest));
                }
            }
            return visited;
        }
    }
    BFS(vertex) {
        if (this.vertexExists(vertex)) {
            const queue = [vertex];
            const visited = [];
            while (queue.length) {
                const vertex = queue.shift();
                if (!visited.includes(vertex)) {
                    visited.push(vertex);
                    this.nodes[vertex].forEach(v => queue.push(v.dest));
                }
            }
            return visited;
        }
    }
    shortestPath(start, end) {
        if (start === end)
            return console.log(end + " -> " + end);

        const distances = {}; //Shortest distance from Start
        const previous = {};
        const pq = new PriorityQueue();
        for (const node in this.nodes) {
            if (node === start) {
                distances[node] = 0;
                pq.enqueue(node, 0);
            } else {
                distances[node] = Infinity;
            }
            previous[node] = null;
        }
        while (!pq.isEmpty()) {
            const vertex = pq.dequeue().value;
            if (vertex !== end) {
                for (const sibling of this.nodes[vertex]) {
                    const distance = sibling.weight + distances[vertex];
                    if (distance < distances[sibling.dest]) {
                        distances[sibling.dest] = distance;
                        previous[sibling.dest] = vertex;
                        pq.enqueue(sibling.dest, distance);
                    }
                }
            } else {
                const stack = [end];
                let vertex = end;
                while (previous[vertex]) {
                    stack.push(previous[vertex]);
                    vertex = previous[vertex];
                }
                let first = stack.pop();
                while (stack.length) {
                    const second = stack.pop();
                    console.log(first + " -> " + second);
                    first = second;
                }
                return;
            }
        }
    }
}
module.exports = Graph;