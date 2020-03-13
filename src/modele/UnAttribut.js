const StringBuilder = require('./../module/StringBuilder');
var compare = require('./../module/fctArray').compare;


function UnAttribut(unnom, value) {

    this.nom = unnom || "";
    this.valeur = value || "";

}

/** Affiche le tableau uniquement. 
 * nom | valeur
*/
UnAttribut.prototype.toString = function () {

    return this.nom + " | " + this.valeur + " | ";

};

/** Affiche le tableau et les diverses lignes 
 * 
 *  nom | valeur
 * <ligne>
*/
UnAttribut.prototype.toDebugString = function () {
    var deb = " | " + this.nom + " | " + this.valeur + " | " + "\n";

    var sb = new StringBuilder();
    sb.append(deb);

    return sb.toString();
};

/** getnom. 
 * @return nom;
*/
UnAttribut.prototype.getnom = function () {
    return this.nom;
};

/** setnom. 
 * nom | valeur
*/
UnAttribut.prototype.setnom = function (numnom) {
    this.nom = numnom;
};

/** getvaleur. 
 * @return nom;
*/
UnAttribut.prototype.getvaleur = function () {
    return this.valeur;
};

/** setvaleur. 
 * nom | valeur
*/
UnAttribut.prototype.setvaleur = function (unvaleur) {
    this.valeur = unvaleur;
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
 * Genere structure AST.
 * @param {Array } option - des options de génération.
 * @returns {Object} une structure du type Attribut.
 */
UnAttribut.prototype.genererAst = function (option) {

    if (compare(this.nom, 'label')) {
        var rep = {
            type: 'attr',
            id: this.nom,
            eq: this.valeur
        };

        return rep;
    } else {

        var rep = {
            type: 'attr',
            id: this.nom,
            eq: this.valeur
        };

        return rep;
    }
}

module.exports = UnAttribut;