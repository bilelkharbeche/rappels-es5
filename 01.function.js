console.log("01 - fonctions");

var nb1 = 10;
var nb2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat1 = additionner(nb1, nb2);

console.log(resultat1);

//----------------------------------------------

var somme = additionner;

var resultat2 = somme(nb1, nb2)

console.log(resultat2);

//----------------------------------------------

var multiplication = function(nb1, nb2){
    return nb1*nb2;
}

var resultat3 = multiplication(nb1, nb2);

console.log(resultat3);

//----------------------------------------------

var afficherOperation = function(nomOperation, operation, nb1, nb2) {
    return nomOperation + '(' + nb1 + ',' + nb2 + ') = ' + operation(nb1,nb2);
}

var resultatSomme = afficherOperation('Somme', somme, 20, 40);
console.log(resultatSomme);

//----------------------------------------------

var resultatMulitplication = afficherOperation('Mulitplication', multiplication, 10, 20);
console.log(resultatMulitplication);

//----------------------------------------------

var resultatSoustraction = afficherOperation('Soustraction', function(nb1, nb2){return nb1-nb2}, 15, 5);
console.log(resultatSoustraction);

//----------------------------------------------

