/**
 * Exemple en provenance de Graphlib.
 * 18/12/2019
 */

var Graph = require("./../../js/modele/graph");

// Create a new directed graph
var g = new Graph();

/*
g.setDefaultNodeLabel(function( val)
{
    console.log("appelSetDefault()")
    console.log("id =" + val);

}
)
*/

g.setDefaultNodeLabel(function(val) { 
    console.log("appelSetDefault()")
    //console.log("id =" + val);
    return {"label":val}; 
}
);

// Add node "a" to the graph with no label
console.log("* Un noeud vide")
g.setNode("a");
console.log("affiche le contenu du noeud");
console.log(g.node("a"));
console.log(g.hasNode("a"));
// => true

console.log("* Un noeud avec texte")
// Add node "b" to the graph with a String label
g.setNode("b", "b's value");

// Get the label for node b
g.node("b");
// => "b's value"
console.log(g.node("b"));

// Add node "c" to the graph with an Object label
console.log("* Un noeud avec properties")
g.setNode("c", { k: 123 });

console.log(g.node("c"));
// What nodes are in the graph?
g.nodes();
// => `[ 'a', 'b', 'c' ]`
console.log(g.nodes());

// Add a directed edge from "a" to "b", but assign no label
g.setEdge("a", "b");

// Add a directed edge from "c" to "d" with an Object label.
// Since "d" did not exist prior to this call it is automatically
// created with an undefined label.
g.setEdge("c", "d", { k: 456 });

// What edges are in the graph?
g.edges();
// => `[ { v: 'a', w: 'b' },
//       { v: 'c', w: 'd' } ]`.

// Which edges leave node "a"?
g.outEdges("a");
// => `[ { v: 'a', w: 'b' } ]`

// Which edges enter and leave node "d"?
g.nodeEdges("d");
// => `[ { v: 'c', w: 'd' } ]`