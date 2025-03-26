//construction of a binary tree and methods

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    //insert method
    insert(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
            return this; // Return BST instance
        }

        let currentNode = this.root;

        while (true) {
            if (currentNode.value === value) return undefined; // No duplicates allowed

            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    return this; // Return BST instance
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = node;
                    return this; // Return BST instance
                }
                currentNode = currentNode.right;
            }
        }
    }

    //find method
    find(value) {
        if (this.root == null) return false; // If tree is empty, return false

        let current = this.root;

        while (current) {
            // Loop until we reach a null node
            if (current.value === value) return current; // Value found, return the node

            if (value < current.value) {
                current = current.left; // Move left
            } else {
                current = current.right; // Move right
            }
        }

        return undefined; // If value is not found
    }

    contains(value) {
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

    display(node) {
        if (!node) return null;

        console.log(node.value);
        this.display(node.right);
        this.display(node.left);
    }

    findMin(node) {
        if (!node) return undefined;
        let current = node;

        while (current && current.left) {
            current = current.left;
        }

        return current.value;
    }

    // Delete a node
    deleteNode(root, value) {
        if (!root) return null;

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value); // Move left
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value); // Move right
        } else {
            // Node found
            // Case 1: No child
            if (!root.left && !root.right) {
                return null;
            }

            // Case 2: One child
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            // Case 3: Two children
            // Find the in-order successor (smallest value in the right subtree)
            const minValue = this.findMin(root.right);
            root.value = minValue;
            root.right = this.deleteNode(root.right, minValue); // Delete successor
        }

        return root;
    }

    // Public method to delete value
    remove(value) {
        this.root = this.deleteNode(this.root, value);
    }

    //inorder treversal(left,root ,right)
    inorder(node) {
        if (node) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node) {
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }
}

let tree = new BinaryTree();
tree.insert(100);
tree.insert(20);
tree.insert(150);
tree.insert(40);
tree.insert(50);

console.log(tree.contains(55));
tree.inorder(tree.root);
tree.postorder(tree.root);
tree.preorder(tree.root);
console.log(tree);
