function minEdgeReversals(n: number, edges: number[][]): number[] {
    const graph: [number, number][][] = Array.from(
        { length: n },
        () => []
    );

    for (const [u, v] of edges) {
        // u -> v : cost 0 when going u to v
        // v -> u : cost 1 when going v to u
        graph[u].push([v, 0]);
        graph[v].push([u, 1]);
    }

    const answer = new Array(n).fill(0);

    // Find reversals needed when starting from node 0
    function dfs1(node: number, parent: number): number {
        let count = 0;

        for (const [next, cost] of graph[node]) {
            if (next === parent) continue;

            count += cost + dfs1(next, node);
        }

        return count;
    }

    answer[0] = dfs1(0, -1);

    // Reroot from node 0 to every other node
    function dfs2(node: number, parent: number): void {
        for (const [next, cost] of graph[node]) {
            if (next === parent) continue;

            if (cost === 0) {
                // Original edge: node -> next
                answer[next] = answer[node] + 1;
            } else {
                // Original edge: next -> node
                answer[next] = answer[node] - 1;
            }

            dfs2(next, node);
        }
    }

    dfs2(0, -1);

    return answer;
}