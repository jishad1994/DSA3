class Graph {
    constructor() {
        this.adjacensyList = {};
    }

    //add node
    addVertex(vertx) {
        if (!this.adjacensyList[vertx]) {
            this.adjacensyList[vertx] = new Set();
        }
    }
    //add connection
    addEdges(vertex1, vertex2) {
        if (!this.adjacensyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacensyList[vertex2]) this.addVertex(vertex2);
        this.adjacensyList[vertex1].add(vertex2);
        this.adjacensyList[vertex2].add(vertex1);
    }
    //check two possible connections exist
    hasEdge(vertex1, vertex2) {
        return this.adjacensyList[vertex1].has(vertex2) && this.adjacensyList[vertex2].has(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacensyList[vertex1].delete(vertex2);
        this.adjacensyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacensyList[vertex]) return null;

        for (let edge of this.adjacensyList[vertex]) {
            this.delete(vertex, edge);
        }
        delete this.adjacensyList[vertex];
    }

    display() {
        for (let vertex in this.adjacensyList) {
            console.log(`${vertex}=> ${[...this.adjacensyList[vertex]]}`);
        }
    }

    bfs(start) {
        let queue = [start];
        let visited = new Set();
        visited.add(start);
        let result = [];
        while (queue.length) {
            let current = queue.shift();
            result.push(current);
            for (let item of this.adjacensyList[current]) {
                if (!visited.has(item)) {
                    visited.add(item);
                    queue.push(item);
                }
            }
        }
        return result;
    }

    //deapth first search
    dfs(start, visited = new Set()) {
        if (visited.has(start)) return; //base condition
        visited.add(start);
        console.log(start);
        for (let neighbours of this.adjacensyList[start]) {
            this.dfs(neighbours, visited);
        }
    }


    
}

const myList = new Graph();
myList.addVertex("dxb");
myList.addVertex("ccj");
myList.addVertex("koh");
myList.addVertex("auh");
myList.addVertex("rak");
myList.addEdges("dxb", "koh");
myList.addEdges("dxb", "ccj");
myList.addEdges("rak", "koh");
myList.addEdges("auh", "ccj");
myList.display();
console.log(myList.bfs("dxb"));
myList.dfs("auh")