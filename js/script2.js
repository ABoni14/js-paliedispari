let pariDispari = prompt("pari o dispari?");
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
let numeroPc = Math.floor(Math.random() * 4 + 1 );
let contenitore = document.getElementById("pariDispari");
let somma = numeroUtente + numeroPc;
let errorMsg = `
Hai puntato ${pariDispari} e hai scelto il numero ${numeroUtente}.
Il computer ha estratto il numero ${numeroPc}.
Il totale è ${somma} quindi è`;

// FUNZIONA PER IDENTIFICARE SE IL NUMERO E' PARI, DISPARI O NaN
function funzPariDisp(calcolo){
  if(isNaN(calcolo)){
    return undefined;
  }
  if(calcolo % 2 === 0){
    return true;
  } else{
    return false;
  }
}

// ERRORI MESSAGGI
if(pariDispari != "pari" || pariDispari != "dispari"){
  pariDispari = "pari";
}

if(isNaN(numeroUtente)){
  errorMsg = "Inserisci un numero";
}

if(numeroUtente > 5 || numeroUtente <= 0){
  errorMsg = "Inserisci un numero compreso tra 1 e 5"
}
// //ERRORI MESSAGGI


let totale = funzPariDisp(somma);


// STAMPO A SCHERMO
if(totale === true){
  contenitore.innerHTML = correctMsg + " è pari";
} else if (totale === false){
  contenitore.innerHTML = errorMsg + " è dispari";
} else{
  contenitore.innerHTML = errorMsg;
}