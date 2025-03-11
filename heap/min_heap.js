class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParetntIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index) {
        return 2 * index + 1;
    }
    getRightChild(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(element) {
        this.heap.push(element);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = this.getParetntIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        let min = this.heap.shift();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let n = this.heap.length;
        let smallest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

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

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

let heap = new MinHeap();
heap.insert(15);
heap.insert(34);
heap.insert(68);
heap.insert(80);
heap.insert(18);
heap.insert(40);
console.log(heap.heap);
heap.extractMin()
console.log(heap.heap);
