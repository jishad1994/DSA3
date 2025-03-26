class Graph {
    constructor() {
        this.adList = {};
    }

    addVertex(vertex) {
        if (!this.adj[vertex]) {
            this.adList[vertex] = new Set();
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.adList[vertex1]) this.addVertex(vertex1);
        if (!this.adList[vertex2]) this.addVertex(vertex2);
        this.adList[vertex1].push(vertex2);
        this.adList[vertex2].push(vertex1);
    }

    hasEdges(vertex1, vertex2) {
        return this.adList[vertex1].has(vertex2) && this.adList[vertex2].has(vertex1);
    }

    removeEdges(vertex1, vertex2) {
        this.adList[vertex1].delete(vertex2);
        this.adList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        for (let neigbors of this.adList[vertex]) {
            this.removeEdges(vertex, neigbors);
        }

        delete this.adList[vertex];
    }

    display() {
        for (let vertex in this.adList) {
            console.log(``);
        }
    }

    bfs(start) {
        let visited = new Set();

        let queue = [start];

        let results = [];

        visited.add();

        while (queue.length) {
            let current = queue.shift();

            results.push(current);

            for (let neighbors of this.adList[current]) {
                if (!visited.has(neighbors)) {
                    queue.push(neighbors);
                    visited.add(neighbors);
                }
            }
        }

        return results;
    }

    dfs(start, visited = new Set()) {
        if (visited.has(start)) return; //bae case

        visited.add(start);
        console.log(start);

        for (let neighbors of this.adList[start]) {
            this.dfs(neighbors, visited);
        }
    }
}
