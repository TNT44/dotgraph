var _ = require("lodash");
var Graph = require("./graph");

/**
 * Recopie de la partie json de graphlib.
 */

module.exports = {
  write: write,
  read: read
};

/**
 * Creation d'une structure json à partir d'un graph.
 * @param {Object} g un Graph
 */
function write(g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound()
    },
    nodes: writeNodes(g),
    edges: writeEdges(g)
  };
  if (!_.isUndefined(g.graph())) {
    json.value = _.clone(g.graph());
  }
  return json;
}

/**
 * Fonction ecriture des noeuds.
 * @param {Graph} g 
 */
function writeNodes(g) {
  return _.map(g.nodes(), function(v) {
    var nodeValue = g.node(v);
    var parent = g.parent(v);
    var node = { v: v };
    if (!_.isUndefined(nodeValue)) {
      node.value = nodeValue;
    }
    if (!_.isUndefined(parent)) {
      node.parent = parent;
    }
    return node;
  });
}

/**
 * Fonction ecriture des liens.
 * @param {Graph} g 
 */
function writeEdges(g) {
  return _.map(g.edges(), function(e) {
    var edgeValue = g.edge(e);
    var edge = { v: e.v, w: e.w };
    if (!_.isUndefined(e.name)) {
      edge.name = e.name;
    }
    if (!_.isUndefined(edgeValue)) {
      edge.value = edgeValue;
    }
    return edge;
  });
}

/**
 * Lecture d'une structure json.
 * @param {Object} json 
 */
function read(json) {
  var g = new Graph(json.options).setGraph(json.value);
  _.each(json.nodes, function(entry) {
    g.setNode(entry.v, entry.value);
    if (entry.parent) {
      g.setParent(entry.v, entry.parent);
    }
  });
  _.each(json.edges, function(entry) {
    g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
  });
  return g;
}
