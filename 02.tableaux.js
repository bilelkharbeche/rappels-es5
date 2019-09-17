var ville = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

function afficher(element){
    console.log(element);
}

ville.forEach(afficher);

var resEvery = ville.every(function(element){
    return element.includes('a');
})

console.log(resEvery);

var resSome = ville.some(function(element){
    return element.includes('-');
})

console.log(resSome);

var resFiltre = ville.filter(function(element){
    return !element.includes('-') && !element.includes(' ');
})

console.log(resFiltre);

var EndSAndMaj = ville.filter(function(element){
    return element.endsWith('s');
}).map(function(element){
    return element.toUpperCase();
})

console.log(EndSAndMaj);
