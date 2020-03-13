
var expect = require('chai').expect;
var assert = require("chai").assert;

var Untableau = require('../../src/modele/Untableau');
var Unelignesimple = require('../../src/modele/Unelignesimple');
var UnAttribut = require('../../src/modele/UnAttribut');
var Factory = require('../../src/modele/Factory');
var Fixture = require('../fixtures');
var compare = require('../../src/module/fctArray').compare;


describe('test UnAttribut: ', function () {

  it('creer un attribut complet', function () {

    var un = new UnAttribut("nom", "montableau");

    //expect(un).to.be.an.instanceof(UnAttribut)
    //expect(un.getnom()).to.equal("nom");
    //expect(un.getvaleur()).to.equal('montableau');

    assert.instanceOf(un, UnAttribut, 'un is an instance of UnAttribut');
    assert.equal(un.getnom(),'nom');
    assert.equal(un.getvaleur(),'montableau');

    //console.log(un.toString());

  });


  it('creer un attribut simple via factory', function () {

    var structuresimple = Fixture.proper;

    var un = Factory.createProperty(structuresimple);
    //expect(un).to.be.an.instanceof(UnAttribut)
    //expect(un.getnom()).to.equal('pos');
    //expect(un.getvaleur()).to.equal('85,81');

    assert.instanceOf(un, UnAttribut, 'un is an instance of UnAttribut');
    assert.equal(un.getnom(),'pos');
    assert.equal(un.getvaleur(),'85,81');

    //console.log(un.toString());
  });

  it('tester la fonction generer AST', function () {

    var structuresimple = Fixture.proper;
    //console.log("structuresimple");
    //console.log(structuresimple);

    var un = Factory.createProperty(structuresimple);

    //console.log("repast");
    var repast = un.genererAst();
    //console.log(repast);

    //expect(compare(structuresimple, repast)).to.be.true;
    assert.isTrue(compare(structuresimple, repast))

  });



});
