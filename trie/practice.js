class Node {
    constructor() {
        this.children = {};
        this.endOfTheWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root();

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }

            node = node.children[char];
        }

        node.endOfTheWord = true;
    }

    isWord(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }

        return node.endOfTheWord;
    }

    startsWIth(prefix) {
        let node = this.root;

        for (let char of prefix) {
            if (!node.children[char]) return false;

            node.node.children[char];
        }

        return true;
    }

    autoComplete(prefix) {
        let node = this.root;

        for (let char of prefix) {
            if (!node.children[char]) return [];

            node = node.children[char];
        }

        let words = [];
        this.collectWords(node, prefix, words);
        return words;
    }

    collectWords(node, prefix, words) {
        if (node.endOfTheWord) {
            words.push(prefix);
        }

        for (let char in node.children) {
            this.collectWords(node, prefix + char, words);
        }
    }

    longestCommonPrefix() {
        let node = this.root;
        let prefix = "";
        while (node) {
            
        }
    }
}
