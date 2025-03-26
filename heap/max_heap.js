class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        return parentIndex;
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

    //inset element

    insert(element) {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }
 
    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] < this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex; //recursively swap with the parent of the parent intil raching the root node
            } else {
                break;
            }
        }
    }

    extractMax() {
        let max = this.heap[0]; //root will be the max

        this.heap[0] = this.heap.pop(); //swap with the last element of the heap

        this.heapifyDown(0); //adjsu the all nodes to satisfy the condition
        return max;
    }

    heapifyDown(i) {
        let n = this.heap.length-1;
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (i < n && this.heap[largest] < this.heap[left]) {
            largest = left;
        }

        if (i < n && this.heap[largest] < this.heap[right]) {
            largest = right;
        }

        if (largest !== i) {
            this.swap(largest, i);
            this.heapifyDown(largest);
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

let maxheap = new MaxHeap();
maxheap.insert(15);
maxheap.insert(18);
maxheap.insert(25);
maxheap.insert(85);
console.log(maxheap.peek())//85
maxheap.extractMax();
console.log(maxheap.peek())//85
console.log(maxheap.heap)
