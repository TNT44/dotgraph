/**
 * Exemple en provenance de Graphlib.
 * 18/12/2019
 */

var Graph = require("../../js/modele/graph");

// Create a new directed graph
var g = new Graph();

var g = new Graph({ compound: true });
g.setParent("a", "parent");
g.setParent("b", "parent");
console.log(g.parent("a"));      // returns "parent"
console.log(g.parent("b"));      // returns "parent"
console.log(g.parent("parent")); // returns undefined
