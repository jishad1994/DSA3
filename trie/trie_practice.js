//trie node
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndChar = false;
    }
}

//class trie with empty root node;
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    //insert Method

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        node.isEndChar = true;
    }

    // get all words

    getAllWords() {
        let node = this.root;

        let words = [];
        this.collectWords(node, "", words);
        return words;
    }
    //method to find words with common prefix
    getWords(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return [];

            node = node.children[char];
        }

        let words = [];
        this.collectWords(node, prefix, words);
        return words;
    }

    //helper method for collecting words having common prefix
    collectWords(node, prefix, words) {
        if (node.isEndChar) {
            words.push(prefix);
        }

        for (let char in node.children) {
            this.collectWords(node.children[char], prefix + char, words);
        }
    }

    //count total words stored in the trie

    countWords() {
        return this.countWordsHelper(this.root);
    }

    //helper method to count through all possible nodes inn the trie

    countWordsHelper(node) {
        let count = 0;
        if (node.isEndChar) count++;

        for (let char in node.children) {
            count += this.countWordsHelper(node.children[char]);
        }
        return count;
    }

    //find the longest common prefix

    longestCommonPrefix() {
        let node = this.root;
        let prefix = "";
        while (node) {
            let keys = Object.keys(node);
            if (keys.length !== 1 || node.isEndChar) break;

            let nextChar = keys[0];
            prefix += nextChar;

            node = node.children[nextChar]; //travers untill only one child exits in the each node;
        }
        return prefix;
    }
}
