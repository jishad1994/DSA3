function heapify(array, n, i) {
    let largest = i; //current parent index
    let left = 2 * i + 1; //left child index
    let right = 2 * i + 2; //right child index;

    //deciding the largest node value index

    if (left < n && array[left] > array[largest]) {
        largest = left;
    }
    //deciding the largest node value index

    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    //swapping
    if (largest !== i) {
        [array[largest], array[i]] = [array[i], array[largest]];

        //call recursively for if the swapped node has any sub tree
        heapify(array, n, largest);
    }
}

//heap sorting function

function heapSort(array) {
    let n = array.length;
    //first heapify the whole array
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    //elemenate the root node which is the highset node with last element which is on the last index(last leaf node)

    for (let i = n - 1; i > 0; i--) {
        [array[i], array[0]] = [array[0], array[i]];

        heapify(array, i, 0);
    }

    return array;
}

console.log(heapSort([66, 3, 72, 1, 99,99])); // output:[ 1, 3, 66, 72, 99 ]
