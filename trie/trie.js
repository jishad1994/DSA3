//create a node

class Node {
    constructor() {
        this.children = {};
        this.isEndOfTheWord = false;
    }
}

//create a trie class

class Trie {
    constructor() {
        this.root = new Node(); //created a new empty node as root node
    }

    //insert a word method;

    insert(word) {
        let node = this.root;

        //loop through each char of the word
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node(); // if the char is not present create a new node on behalf of first char
            }

            node = node.children[char]; //change to the new node
        }
        node.isEndOfTheWord = true; //in the end the char will consdier as end
    }

    isWord(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) return false; //if no char present in the node return false;

            node = node.children[char]; //treverse through the nodes untill reaches the last node;
        }

        return node.isEndOfTheWord; //check if the last char is end of the word or not and return;
    }

    //check prefix same as is word;

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;

            node = node.children[char];
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
        if (node.isEndOfTheWord) {
            words.push(prefix);
        }

        for (let char in node.children) {
            this.collectWords(node.children[char], prefix + char, words);
        }
    }
}

let myTrie = new Trie();
myTrie.insert("cat");
myTrie.insert("cam");
myTrie.insert("car");
myTrie.insert("cart");
console.log(myTrie.autoComplete("ca"));

//the trie will look like

// {
//     children: {  <=root node
//         c: {
//             children: {
//                 a: {
//                     children: {
//                         t: {
//                             children: {},
//                             isEndOfWord: true  // End of "cat"
//                         },
//                         r: {
//                             children: {},
//                             isEndOfWord: true  // End of "car"
//                         }
//                     },
//                     isEndOfWord: false
//                 }
//             },
//             isEndOfWord: false
//         }
//     },
//     isEndOfWord: false
// }
