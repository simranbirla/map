const findParent = (v, parent) => {
  if (parent[v] === v) {
    return v;
  }
  return findParent(parent[v], parent);
};

const kruskals = (kruskal_arr, n) => {
  let parent = [];
  let output = [];

  kruskal_arr.sort((a, b) => {
    return a.weight - b.weight;
  });
  for (let i = 0; i < n; i++) {
    parent.push(i);
  }
  let i = 0;
  let count = 0;

  while (count !== n - 1) {
    let currentEdge = kruskal_arr[i];

    let sourceParent = findParent(currentEdge.source, parent);
    let destParent = findParent(currentEdge.destination, parent);
    if (sourceParent !== destParent) {
      output[count] = currentEdge;
      count = count + 1;
      parent[sourceParent] = destParent;
    }
    i = i + 1;
  }

  return output;
};

export default kruskals;
