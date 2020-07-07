var km = parseInt (prompt("Inserisci quanti km devi percorrere"));
var eta = parseInt (prompt("Inserisci la tua età:"));
var risultato = km * 0.21;

if (eta < 18) {
document.getElementById("costo-treno").innerHTML = "Il costo è: &nbsp" + risultato * 0.8 + "&nbspEur";
}

else if(eta >= 18){
document.getElementById("costo-treno").innerHTML = "Il costo è: &nbsp" + risultato + "&nbspEur";
}

if (eta >= 65) {
document.getElementById("costo-treno").innerHTML = "Il costo è: &nbsp" + risultato * 0.6 + "&nbspEur";
}
