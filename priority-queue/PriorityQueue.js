class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    //DATA MEMBERS
    queue = [];

    //MEMBER FUNCTIONS
    //PUBLIC
    enqueue(value, priority) {
        const node = new Node(value, priority);
        const index = this.queue.length;
        this.queue.push(node);
        this.bubbleUp(index);
    }
    dequeue() {
        if (this.queue.length) {
            const first = this.queue[0];
            const last = this.queue[this.queue.length - 1];
            this.queue[0] = last;
            this.queue[this.queue.length - 1] = first;
            this.queue.pop();
            this.bubbleDown(0);
            return first;
        }
    }
    isEmpty() {
        return !this.queue.length;
    }
    //PRIVATE
    bubbleUp(childIndex) {
        const child = this.queue[childIndex];
        const parentIndex = Math.floor((childIndex - 1) / 2);
        const parent = this.queue[parentIndex];
        if (parent && child.priority < parent.priority) {
            this.queue[parentIndex] = child;
            this.queue[childIndex] = parent;
            this.bubbleUp(parentIndex);
        }
    }
    bubbleDown(parentIndex) {
        const parent = this.queue[parentIndex];
        const childIndex = this.greater(parentIndex);
        const child = this.queue[childIndex];
        if (child && child.priority < parent.priority) {
            this.queue[childIndex] = parent;
            this.queue[parentIndex] = child;
            this.bubbleDown(childIndex);
        }
    }
    greater(index) {
        const LCI = 2 * index + 1;
        const RCI = 2 * index + 2;
        const LC = this.queue[LCI];
        const RC = this.queue[RCI];

        if (LC && RC) {
            if (LC.priority < RC.priority)
                return LCI;
            else
                return RCI;
        }
        else if (LC)
            return LCI;
        else if (RC)
            return RCI;
        else
            return -1;
    }
}

module.exports = PriorityQueue;