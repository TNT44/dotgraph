const StringBuilder = require('./../module/StringBuilder');

var Unelignesimple = require('./Unelignesimple');

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}


function UnNoeud(unid, value) {

    this.id = unid || "";
    this.nom = value || "";
    this.tabproperties = [];

    if (this.id === "") {
        this.id = create_UUID();
    }
}

/** Affiche le tableau uniquement. 
 * ID | nom
*/
UnNoeud.prototype.toString = function () {

    return this.id + " | " + this.nom + " | ";

};

/** Affiche le tableau et les diverses lignes 
 * 
 *  ID | nom
 * <ligne>
*/
UnNoeud.prototype.toDebugString = function () {
    var deb = " | " + this.id + " | " + this.nom + " | " + "\n";

    var sb = new StringBuilder();
    sb.append(deb);

    this.tabligne.forEach((un) => {
        sb.append(un.toDebugString());
    });

    return sb.toString();
};

/** getid. 
 * @return id;
*/
UnNoeud.prototype.getId = function () {
    return this.id;
};

/** setid. 
 * ID | nom
*/
UnNoeud.prototype.setId = function (numid) {
    this.id = numid;
};

/** getnom. 
 * @return id;
*/
UnNoeud.prototype.getNom = function () {
    return this.nom;
};

/** setnom. 
 * ID | nom
*/
UnNoeud.prototype.setNom = function (unnom) {
    this.nom = unnom;
};

/**
 * Ajout un objet de type uneproperty
 */
UnNoeud.prototype.addUneProperty = function (uneproperty) {
    this.tabproperties.push(uneproperty);
};

/**
 * Créer une ligne;
 */
UnNoeud.prototype.addligne = function (nom) {

    this.tabproperties.push(new Unelignesimple(nom));
};

UnNoeud.prototype.getNbProperties = function () {
    return this.tabproperties.length;
};

/**
 * Genere un AttrsAst.
 * @param {Array } attrs - une liste d'attributs.
 * @returns {Object} une structure du type AttrsAst.
 */
genAttrsAst = function (attrs) {
    var k, ret, v;
    if (!attrs || !attrs instanceof Object) {
        return null;
    }
    ret = [];
    for (k in attrs) {
        v = attrs[k];
        ret.push({
            type: 'attr',
            id: k,
            eq: v
        });
    }
    return ret;
};


/**
     * Genere un Noeud.
     * @param {id} id - un identificant unique .
     * @param {Array} attrs -un tableau d'attributs.
     * @param {String} html -une chaine html.
     * @returns {Object} une structure du type NodeAST.
     */
UnNoeud.prototype.genNodeAst = function (id, attrs, html) {
    var attrList, ret;
    ret = {
        type: 'node_stmt',
        node_id: {
            type: 'node_id',
            id: id
        }
    };
    attrList = genAttrsAst(attrs.attrs);
    if (attrList) {
        ret.attr_list = attrList;
    }
    return ret;
};

/**
 * Genere structure AST.
 * @param {Array } option - des options de génération.
 * @returns {Object} une structure du type Attribut.
 */
UnNoeud.prototype.genererAst = function (option) {

    var rep = {
        type: 'attr',
        id: this.nom,
        eq: this.valeur
    };

    return rep;
}

module.exports = UnNoeud;