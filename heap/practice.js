//implementing a max heap

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    //get parent

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    getLeftIndex(index) {
        return 2 * i + 1;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = this.getParent(index);
            if (this.heap[parent] < this.heap[index]) {
                this.swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }

    extractMax() {
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyDown(index) {
        let right = this.getRightIndex(index);
        let left = this.getLeftIndex(index);
        let n = this.heap.length;
        let largest = index;

        if (right < n && this.heap[largest] < this.heap[left]) {
            largest = left;
        }
        if (left < n && this.heap[largest] < this.heap[right]) {
            largest = left;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }
}

//implementation of min heap

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }
    getLeftIndex(index) {
        return 2 * index + 1;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = this.getRightIndex(index);

            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        let min = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
    }

    heapifyDown(index) {
        let n = this.heap.length;
        let left = this.getLeftIndex(index);
        let right = this.getRightIndex(index);

        let smallest = index;
        if (left < n && this.heap[smallest] > this.heap[left]) {
            smallest = left;
        }
        if (right < n && this.heap[smallest] > this.heap[right]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(smallest, index);
            this.heapifyDown(smallest);
        }
    }
}

//find the k th largest element


