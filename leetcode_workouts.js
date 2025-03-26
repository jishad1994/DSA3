//heap sort implementation

function heapify(array, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    //swap the largest

    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, n, largest);
    }
}

function heapSort(array) {
    //heapify the whole array
    let n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    //     elemente the root elemnt with last

    for (let i = n - 1; i > 0; i--) {
        [array[i], array[0]] = [array[0], array[i]];
        heapify(array, i, 0);
    }

    return array;
}

console.log(heapSort([5, 4, 8, 2, 9, 6, 2]));

//clone a graph

function cloneGraph(node) {
    if (!node) return null;

    let visited = new Map();

    function dfs(originalNode) {
        if (visited.has(originalNode)) return visited.get(originalNode);
        let clonedNode = new Node(originalNode.value);

        visited.set(originalNode, clonedNode);

        for (let neighbors of originalNode.neighbors) {
            clonedNode.neighbors.push(dfs(neighbors));
        }

        return clonedNode;
    }

    return dfs(node);
}

//find k th largest element;

function findKth(nums, k) {
    let minHeap = new MinHeap();
    for (let num of nums) {
        if (minHeap.getSize() < k) {
            minHeap.insert(num);
        } else if (num > minHeap.peek()) {
            minHeap.extractMin();
            minHeap.insert(num);
        }
    }

    return minHeap.peek();
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getSize() {
        return this.heap.length;
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeft(index) {
        return 2 * index + 1;
    }

    getRight(index) {
        return 2 * index + 2;
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
            let parentIndex = this.getParent(index);
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
        return min;
    }

    heapifyDown(index) {
        let smallest = index;
        let n = this.heap.length;
        let left = this.getLeft(index);
        let right = this.getRight(index);

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
        return this.heap[0];
    }
}

console.log(findKth([5, 7, 2, 4, 6], 3));

//find the kth smallest element in an

function findKthSmallest(root, k) {
    let current = root;

    let stack = [];
    let count = 0;

    while (current || stack.length > 0) {
        //go to left most
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        count++;

        if (k == count) {
            return current.value;
        }
        current = current.right;
    }
    return -1;
}

function findKthSmallest(root, k) {
    let current = root;
    let count = 0;

    let stack = [];

    while (current || stack.length > 0) {
        while (current && current.left) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        count++;

        if (count == k) {
            return current.value;
        }

        current = current.right;
    }
    return -1;
}
