//self balancing tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AvlTree {
    constructor() {
        this.root = null;
    }

    //get heught
    getHeight(node) {
        return node ? node.height : 0;
    }

    //get blance factor
    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    //rotate right

    rotateRight(y) {
        let x = y.left;
        let t2 = x.right;

        //rotate right;

        x.right = y;
        y.left = t2;

        //update heights
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    //rotate left
    rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;

        // Rotation
        y.left = x;
        x.right = T2;

        // Update Heights
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }
    insert(node, value) {
        if (!node) return new TreeNode(value);

        if (value < node.value) {
            node.left = this.insert(node.left, value);
        } else if (value > node.value) {
            node.right = this.insert(node.right, value);
        } else {
            return node; // No duplicates allowed
        }

        // Update height
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        // Get balance factor
        let balance = this.getBalanceFactor(node);

        // **Perform Rotations if needed**
        // Left-Left (LL) Case
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // Right-Right (RR) Case
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // Left-Right (LR) Case
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right-Left (RL) Case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    insertValue(value) {
        this.root = this.insert(this.root, value);
    }

    preOrder(node = this.root) {
        if (!node) return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}
