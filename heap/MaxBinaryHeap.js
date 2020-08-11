class MaxBinaryHeap {
    //DATA MEMBERS
    values = [];

    //MEMBER FUNCTIONS
    //PUBLIC
    push(value) {
        const index = this.values.length;
        this.values.push(value);
        this.bubbleUp(index);
    }
    pop() {
        if (this.values.length) {
            const first = this.values[0];
            const last = this.values[this.values.length - 1];
            this.values[0] = last;
            this.values[this.values.length - 1] = first;
            this.values.pop();
            this.bubbleDown(0);
            return first;
        }
    }

    //PRIVATE
    bubbleUp(childIndex) {
        const child = this.values[childIndex];
        const parentIndex = Math.floor((childIndex - 1) / 2);
        const parent = this.values[parentIndex];
        if (child > parent) {
            this.values[parentIndex] = child;
            this.values[childIndex] = parent;
            this.bubbleUp(parentIndex);
        }
    }
    bubbleDown(parentIndex) {
        const parent = this.values[parentIndex];
        const childIndex = this.greater(parentIndex);
        const child = this.values[childIndex];
        if (child > parent) {
            this.values[childIndex] = parent;
            this.values[parentIndex] = child;
            this.bubbleDown(childIndex);
        }
    }
    greater(index) {
        const LCI = 2 * index + 1;
        const RCI = 2 * index + 2;
        const LC = this.values[LCI];
        const RC = this.values[RCI];

        if (LC > RC)
            return LCI;
        else if (RC >= LC)
            return RCI;
        else if (LC)
            return LCI;
        else if (RC)
            return RCI;
        else
            return -1;
    }
}

module.exports = MaxBinaryHeap;