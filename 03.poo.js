var Personne = function(nom, prenom, pseudo){
    this.nom = nom,
    this.prenom = prenom,
    this.pseudo = pseudo;    
    this.getNomComplet = function() {
        return this.nom + this.prenom + this.pseudo;
    }
    this.getInitiales = function() {
        return this.prenom.charAt(0) + this.nom.charAt(0);
    }
}

var jules = new Personne('Jules', 'LEMAIRE', 'jules77');
var Paul = new Personne('Paul', 'LEMAIRE', 'paul44');

console.log(jules.nom, jules.prenom, jules.pseudo, jules.getNomComplet());

var afficherPersonne = function(personne){
    return personne.nom + ' ' + personne.prenom + ' ' + personne.pseudo + ' ' + personne.getNomComplet();
}

console.log(afficherPersonne(Paul));

jules.pseudo = 'jules44';

console.log(afficherPersonne(jules));

Personne.prototype.age = 'NON RENSEIGNEE';

jules.age = 30;

console.log(jules.age);
console.log(jules.getInitiales());

var Robert = {
    prenom : 'Robert',
    nom : 'LEPREFET',
    pseudo : 'robert77',
    getNomComplet(){return this.nom + this.prenom + this.pseudo;}
}

console.log(afficherPersonne(Robert));

var Client = function(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getNomComplet = function() {
        return this.nom + this.prenom + this.pseudo;
    }
    this.getInitiales = function() {
        return this.prenom.charAt(0) + this.nom.charAt(0);
    }
    this.getInfos = function() {
        return this.numeroClient + ' ' + this.nom + ' ' + this.prenom;
    }
}

var steve = new Client('LUCAS', 'Steve', 'steve44', 'A01');

console.log(afficherPersonne(steve));
console.log(steve.numeroClient);
console.log(steve.getInfos());
