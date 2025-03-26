class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    //insert
    insert(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    return this;
                }

                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    //search( O(log n))
    search(value) {
        let current = this.root;

        while (current) {
            if (current.value == value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    preOrder(node) {
        if (!node) return null;

        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrder(node) {
        if (!node) return null;
        this.preOrder(node.left);
        this.preOrder(node.right);
        console.log(node.value);
    }
    inOrder(node) {
        if (!node) return null;
        this.inOrder(node.left);

        this.inOrder(node.right);
    }

    levelOrder(node) {
        let queue = [node];

        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }

    min() {
        let current = this.root;

        while (current && current.left) {
            current = current.left;
        }

        return current.value;
    }
}
