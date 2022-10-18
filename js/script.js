/***Consegna**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
**Consigli del giorno:**  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento. */

// ESECUZIONE
let arrayNumber = [];
const playBtn = document.getElementById("play-btn");
console.log(playBtn);
let numberGrid = "";
const level = document.getElementById("selector");
console.log(level);
let i = 0;



playBtn.addEventListener("click", function () {

  
  const leveleSelected = parseInt(level.value);
  console.log(leveleSelected);
  if(leveleSelected === 1){ 
    numberGrid = 100;
    console.log(numberGrid, "level 1");
  } else if (leveleSelected === 2){
    numberGrid = 81;
    console.log(numberGrid, "level 2");
  } else {
    numberGrid = 49;
    console.log(numberGrid, "level 3");
  }
  
  const row = document.querySelector(".row");
  row.innerHTML = "";

  while (i < numberGrid) {
    arrayNumber.push(i + 1);
    i++
  }
  console.log(arrayNumber);

  for (i = 0; i < arrayNumber.length; i++) {
    const thisNumber = arrayNumber[i];

    // Creo un elemento square
    const thisSquare = createSquare(thisNumber);
    // aggiungo eventListener allo square creato e aggiungo classe "bg-color-blu"
    thisSquare.addEventListener("click", function () {
      this.classList.toggle("bg-color-blu");
      console.log(thisNumber);
    });

    // inserisco l'elemento nel DOM
    row.append(thisSquare);
  }
})



/**
 * Description: La funzione che crea l'elemento square da inserire nel dom
 * @param {number} thisNumber -> numero da inserire all'interno del square
 * @returns {object} elemento DOM che rappresenta lo square
 */
function createSquare(thisNumber) {
  const newSquare = document.createElement("div");
  if (numberGrid === 100){
    newSquare.classList.add("square-easy");
  } else if (numberGrid === 81){
    newSquare.classList.add("square-medium");
  } else {
    newSquare.classList.add("square-hard");
  }
  newSquare.innerHTML = arrayNumber[i];
  return newSquare;
}
