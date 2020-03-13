var expect = require('chai').expect;

var foncast = require('../../src/module/foncAST');
var fctarray = require("../../src/module/fctArray");
var DotGraph = require("../../src/etudetable/mondotgraph").DotGraph;
var comparetableausimple = fctarray.comparetableausimple;

var XDotGraph = require("../../src/etudetable/mondotgraph").XDotGraph;

var genNodeAst = require("../../src/etudetable/mondotgraph").genNodeAst;



var dash = require("min-dash");
var keys = dash.keys;

var fixture = require('../fixtures');

var ast = fixture.simple;


describe('test DotGraph: ', function () {

    it('lister les noeuds', function () {
        var theast = fixture.simple;
        var tab = foncast.listernode(theast);

        var graph = new DotGraph(theast);
        graph.walk(); 	// walks the ast and gathers all information about nodes, edges, and subgraphs

        //console.log(graph.nodes); 	// object of all nodes and their attrs
        //console.log(graph.edges); 	// object of all edges and their attrs
        //console.log(graph.graphs); 	// object of all subgraphs and their attrs

        var tab = graph.nodes;

        //console.log("tab\n", tab);
        //expect(comparetableausimple(tab, ['a', 'b', 'c', 'd', 'e'])).to.be.true;

        expect(keys(tab)).to.eql(['a', 'b', 'c', 'd', 'e']);
    });

    it('lister les noeuds XDotGraph', function () {
        var theast = fixture.simple;
        var tab = foncast.listernode(theast);

        var graph = new XDotGraph(theast);
        graph.walk(); 	// walks the ast and gathers all information about nodes, edges, and subgraphs

        //console.log(graph.nodes); 	// object of all nodes and their attrs
        //console.log(graph.edges); 	// object of all edges and their attrs
        //console.log(graph.graphs); 	// object of all subgraphs and their attrs

        var tab = graph.nodes;

        //console.log("tab\n", tab);
        //expect(comparetableausimple(tab, ['a', 'b', 'c', 'd', 'e'])).to.be.true;

        expect(keys(tab)).to.eql(['a', 'b', 'c', 'd', 'e']);
    });

    it('lister les edges', function () {
        var theast = fixture.simple;
        var tab = foncast.listernode(theast);

        var graph = new DotGraph(theast);
        graph.walk(); 	// walks the ast and gathers all information about nodes, edges, and subgraphs

        var tab = graph.edges;

        //console.log("tab\n", tab);

        expect(keys(tab)).to.eql([ 'a,b', 'a,c', 'c,d', 'd,e', 'b,e' ]);
    });


    it('lister les edges XDotGrpah', function () {
        var theast = fixture.simple;
        var tab = foncast.listernode(theast);

        var graph = new XDotGraph(theast);
        graph.walk(); 	// walks the ast and gathers all information about nodes, edges, and subgraphs

        //console.log(graph.nodes); 	// object of all nodes and their attrs
        //console.log(graph.edges); 	// object of all edges and their attrs
        //console.log(graph.graphs); 	// object of all subgraphs and their attrs

        var tab = graph.edges;

        //console.log("tab\n", tab);
        //expect(comparetableausimple(tab, ['a', 'b', 'c', 'd', 'e'])).to.be.true;

        expect(keys(tab)).to.eql([ 'a,b', 'a,c', 'c,d', 'd,e', 'b,e' ]);
    });

    it('lister les graphs', function () {
        var theast = fixture.simple;
        var tab = foncast.listernode(theast);

        var graph = new DotGraph(theast);
        graph.walk(); 	// walks the ast and gathers all information about nodes, edges, and subgraphs

        var tab = graph.graphs;
        expect(tab).to.be.an('object');
        console.log("tab\n", tab);
        //expect(tab.length).to.equal(1);
    });

    it('lister les graphs XDotGraph', function () {
        var theast = fixture.simple;
        var tab = foncast.listernode(theast);

        var graph = new XDotGraph(theast);
        graph.walk(); 	// walks the ast and gathers all information about nodes, edges, and subgraphs

        var tab = graph.graphs;
        expect(tab).to.be.an('object');
        //console.log("tab\n", tab);
        //expect(tab.length).to.equal(1);
    });

    /*
    it('ajouter un noeud ', function () {
        var theast = fixture.simple;
        var tab = foncast.listernode(theast);

        var graph = new DotGraph(theast);
        graph.walk(); 	// walks the ast and gathers all information about nodes, edges, and subgraphs

        var tab = graph.nodes;
        expect(keys(tab)).to.eql(['a', 'b', 'c', 'd', 'e']);

        var gast = graph.generateAst();

        console.log("gast");
        console.log(gast);

        var toto = graph.rootGraph;
        console.log("rootGraph");
        console.log(toto);

        

        //var done = gast.


        var unnoeud = genNodeAst("ZZ", null , "");

 
    });


*/

});
