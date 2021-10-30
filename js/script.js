// Richiamo le variabili
let parolaUtente = prompt("Inserisci una parola");
let stampa = document.getElementById("risultato");

console.log(parolaUtente);

//PRIMA SOLUZIONE (non stampata a schermo)
function palindroma(parola){

  let parolaInversa = "";

  for (let i = parola.length -1; i >= 0; i--){ // ciclo al contrario per poi confrontare le parole
    
    parolaInversa += parola[i];
    console.log(parolaInversa, i);
  }

  if(parola == parolaInversa){
    return true;
  } else {
    return false;
  }
};
// //PRIMA SOLUZIONE


// SECONDA SOLUZIONE, PIU' COMPATTA E SICURA IN QUANTO NON CONTROLLA TUTTE LE LETTERE PRIMA DI USCIRE DAL CICLO SE C'E' UN ERRORE
function palindroma2(parola){
  let m = parseInt(parola.length / 2);
  for(let i = 0; i <= m; i++){
    if(parola[i] != parola[parola.length -1 -i]){
      return false;
    }
  }

  return true;
}
// //SECONDA SOLUZIONE

// STAMPO A SCHERMO
let risultato = palindroma2(parolaUtente);
console.log(risultato);

if (risultato === true){
  stampa.innerHTML = `Hai scritto ${parolaUtente} ed è una parola palindroma.`
} else{
  stampa.innerHTML = `Hai scritto ${parolaUtente} e non è una parola palindroma.`

}

