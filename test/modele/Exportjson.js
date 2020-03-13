var Graph = require("./../../js/modele/graph");
var GraphJson = require("./../../js/modele/json");

/**
 * Exemple en provenance de Graphlib.
 * 18/12/2019
 */

console.log("---- Write ----");
// Create a new directed graph
var g = new Graph();

g.setNode("a", { label: "node a" });
g.setNode("b", { label: "node b" });
g.setEdge("a", "b", { label: "edge a->b" });

console.log(GraphJson.write(g));

var str = GraphJson.write(g);
// Returns the object:
//
// {
//   "options": {
//     "directed": true,
//     "multigraph": false,
//     "compound": false
//   },
//   "nodes": [
//     { "v": "a", "value": { "label": "node a" } },
//     { "v": "b", "value": { "label": "node b" } }
//   ],
//   "edges": [
//     { "v": "a", "w": "b", "value": { "label": "edge a->b" } }
//   ]
// }

console.log("---- Read ----");
var g2 = GraphJson.read(str);
// or, in order to copy the graph
//var g3 = graphlib.json.read(graphlib.json.write(g))

console.log(g2.nodes());
// ['a', 'b']
console.log(g2.edges());
// [ { v: 'a', w: 'b' } ]
