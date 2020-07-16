// BOTTONE GENERA
var bottoneGenera = document.getElementById('genera');
bottoneGenera.addEventListener("click", function(){
var comparsa = document.getElementById('biglietto-tuo')
comparsa.className = 'bottom-biglietto-genera';
// INSERIMENTO NOME
var nomeUtente = document.getElementById('nomeUtente').value;
document.getElementById('nome').innerHTML = nomeUtente;

// INSERIMENTO KM
var kilometri = document.getElementById('km').value
var prezzokm = kilometri * 0.21;

// INSERIMENTO OFFERTA
var etaUtente = document.getElementById('eta').value;
if ( etaUtente == '0' ) {
    document.getElementById('offerta').innerHTML = 'Sconto Minorenne';
    var sconto = prezzokm * 20 / 100;
    var prezzo = prezzokm - sconto;
    document.getElementById('costo-biglietto').innerHTML = prezzo.toPrecision(3) + '€';
} else if (etaUtente == '1') {
    document.getElementById('offerta').innerHTML = 'Sconto Standard';
    document.getElementById('costo-biglietto').innerHTML = prezzokm.toPrecision(3) + '€';
} else {
    document.getElementById('offerta').innerHTML = 'Sconto Over65';
    var sconto = prezzokm * 40 / 100;
    var prezzo = prezzokm - sconto;
    document.getElementById('costo-biglietto').innerHTML = prezzo.toPrecision(3) + '€';
}

// INSERIMENTO CARROZZA
var randomCarrozza = Math.floor(Math.random()*(100000 - 90000)) + 90000;
document.getElementById('carrozza').innerHTML = randomCarrozza;

// INSERIMENTO CODICE CP
var randomCodiceCp = Math.floor(Math.random()*(9 - 0)) + 1;
document.getElementById('codice-cp').innerHTML = randomCodiceCp;

// COSTO BIGLIETTO
if ( 18){
    var sconto = prezzokm * 20 / 100;
    var prezzo = prezzokm - sconto;
} else if (anni > 64) {
    var sconto = prezzokm * 40 / 100;
    var prezzo = prezzokm - sconto;
}
}
);

// BOTTONE ANNULLA
var bottoneAnnulla = document.getElementById('annulla');
bottoneAnnulla.addEventListener("click", function(){
var comparsa = document.getElementById('biglietto-tuo')
comparsa.className = 'bottom-biglietto'
}
);
