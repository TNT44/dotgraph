//var StringBuilder = require('./../module/StringBuilder');
var FctIo = require('../src/module/FctIo');
var AstToDot = require('../src/module/AstToDot');
var fctarray = require('../src/module/fctArray');
var assert = require("chai").assert;

var parse = require('dotparser');
var DataObjectParser = require('dataobject-parser');

describe('test genération: ', function() {

  it('genere fichier en sortie', function() {

    var nomfichier = "hashtable.gv";
    var debug = false;
    var display = false;

    var versIO = new FctIo(nomfichier);
    var jsonString = versIO.chargefichiergz(nomfichier);

    var monast = parse(jsonString);
    var theast = monast[0];
    if (debug) {
      versIO.figeast(theast);
    }
    var flatast = DataObjectParser.untranspose(theast);

    var res = AstToDot.generegraph(theast, 0);
    if (debug) {
      versIO.figeresultat(res);
    }

    var tabastproduit = parse(res);
    var astproduit = tabastproduit[0];
    if (debug) {
      versIO.figeNouveauAst(theast);
    }
    var flatastproduit = DataObjectParser.untranspose(astproduit);
    if (display) {
      versIO.afficheDeuxAst(flatast, flatastproduit);
    }
    if (debug) {
      versIO.sauveDeuxAst(flatast, flatastproduit);
    }
    //expect(fctarray.isEqualDU(flatast, flatastproduit)).toBeTruthy();
    assert.isTrue(fctarray.isEqualDU(flatast, flatastproduit))
    if (display) {
      console.log("--- Sortie ---\n" + res);
    }
  });

});
