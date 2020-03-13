var expect = require('chai').expect;

var foncast = require('../../src/module/foncAST');
var fctarray = require("../../src/module/fctArray");
var comparetableausimple = fctarray.comparetableausimple;

var dash = require("min-dash");

var fixture = require('../fixtures');

var ast = fixture.simple;


describe('test foncAst: ', function () {

    it('lister les noeuds', function () {
        var theast = fixture.simple;
        var tab = foncast.listernode(theast);

        console.log("tab\n", tab);
        expect(comparetableausimple(tab, [ 'a', 'b', 'c', 'd', 'e' ])).to.be.true;
    });


});
