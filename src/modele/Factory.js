
var UnAttribut = require('../../src/modele/UnAttribut');
var compare = require('../../src/module/fctArray').compare;
var isEqual = require('../../src/module/fctArray').isEqual;
var mh = require('min-dash');
var has = mh.has;

var createNoeud = function (obj) {

  var rep = {};

  if (compare(obj.type, 'node_stmt')) {
  
    if (has(obj,"node_id"))
    {

    }

    if (has(obj,"attr_list"))
    {

    }

  }

  return rep;
  /* {
                "type": "node_stmt",
                "node_id": {
                  "type": "node_id",
                  "id": "ECON 103"
                },
                "attr_list": [{
                    "type": "attr",
                    "id": "label",
                    "eq": {
                      "type": "id",
                      "value": "<font color=\"red\">ECON 103</font><br/><font color=\"blue\">Principles Microeconomics</font>",
                      "html": true
                    }
                  },
                  {
                    "type": "attr",
                    "id": "pos",
                    "eq": "85,81"
                  },
                  {
                    "type": "attr",
                    "id": "width",
                    "eq": "2.3333"
                  },
                  {
                    "type": "attr",
                    "id": "height",
                    "eq": "0.58333"
                  }
                ]
              }
  
  */

}

var createProperty = function (obj) {
  /*
  "attr_list": [{
                "type": "attr",
                "id": "label",
                "eq": {
                  "type": "id",
                  "value": "<font color=\"red\">ECON 103</font><br/><font color=\"blue\">Principles Microeconomics</font>",
                  "html": true
                }
              },
              {
                "type": "attr",
                "id": "pos",
                "eq": "85,81"
              },
          ]
  */
  //console.log(obj);

  if (compare(obj.type, 'attr')) {

    if (compare(obj.id, 'label')) {

      var un = new UnAttribut(obj.id, obj.eq);
      //console.log(un.toString());
      return un;

    } else {
      //console.log("Création");
      var un = new UnAttribut(obj.id, obj.eq);
      //console.log(un.toString());
      return un;
    }
  }

  return null;

}

module.exports = {
  createProperty: createProperty,

};