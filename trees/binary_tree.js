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

    //remove node

    delete(node, value) {
        function removeNode(node, value) {
            if (!node) return null;

            if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else if (value > node.value) {
                node.right = removeNode(node.right, value);
                return node;
            } else {
                //case :1 no children

                if (!node.left && !node.right) return null;

                //case:2 only one child
                if (!node.left) return node.right;
                if (!node.right) return node.left;

                //case 3: two children,find the min in the right subtree;
                node.value = this.findMin(node.right);
                node.right = removeNode(node.right, node.value);
                return node;
            }
        }
        this.root = removeNode(this.root, value);
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

    postorder(node){
        if(node){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.value)
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
console.log(tree)
