/* 
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 
*/


// Richiesta età
const age = prompt ('inserisci qui la tua età');

//Richiesta km da percorrere
const km = prompt ('inserisci qui i km che intendi percorrere');

//pre-settaggio prezzo
let prezzo;


if (age < 18) {
    prezzo = km * 0.21 * 0.8;
}

else if (age > 65) {
    prezzo = km * 0.21 * 0.6;
}

else {
    prezzo = km * 0.21
}

console.log(prezzo);

prezzo = prezzo.toFixed(2);

console.log(prezzo);

document.getElementById("Price").innerHTML= `Il costo del tuo biglietto è : ${prezzo}€`;

