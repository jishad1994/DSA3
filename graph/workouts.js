class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set();
        }
    }
    addEdges(vertex1, vertex2) {
        if (!this.adjList[vertex1]) this.addVertex(vertex1);
        if (!this.adjList[vertex2]) this.addVertex(vertex2);

        this.adjList[vertex1].add(vertex2);
        this.adjList[vertex2].add(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjList[vertex1].delete(vertex2);
        this.adjList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjList[vertex]) return null;

        for (let edge of this.adjList[vertex]) {
            this.removeEdge(vertex, edge);
        }

        delete this.adjList[vertex];
    }
    hasEdge(vertex1, vertex2) {
        return this.adjList[vertex1].has(vertex2) && this.adjList[vertex2].has(vertex1);
    }

    dfs(start, visited = new Set()) {
        if (this.visited.has(start)) return; //base case
        console.log(start);
        visited.add(start);
        for (let edges of this.adjList[start]) {
            this.dfs(edges, visited);
        }
    }

    bfs(start) {
        let queue = [start];
        let visited = new Set();
        let results = [];
        while (queue.length) {
            let current = queue.shift();
            results.push(current);
            for (let edges of this.adjList[current]) {
                visited.add(edges);
                queue.push(edges);
            }
        }

        return results;
    }
}
