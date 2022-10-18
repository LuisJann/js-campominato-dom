/***Consegna**
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta 
  la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con 
  l'inizializzazione di git).
****
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
**BONUS:**
1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
 in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
**2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
**Consigli del giorno:** :party_wizard:
****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.. */

// ESECUZIONE
let arrayNumber = [];
const playBtn = document.getElementById("play-btn");
console.log(playBtn);
let numberGrid = "";
const level = document.getElementById("selector");
console.log(level);
let i = 0;






playBtn.addEventListener("click", function () {
  const arrayBomb = [];
  arrayNumber = [];
  const moveCounter = document.getElementById("counter");
  let q = 0;
  moveCounter.innerHTML = `Mossa n° ${q}`

  const leveleSelected = parseInt(level.value);
  console.log(leveleSelected);
  if (leveleSelected === 1) {
    numberGrid = 100;
    console.log(numberGrid, "level 1");
  } else if (leveleSelected === 2) {
    numberGrid = 81;
    console.log(numberGrid, "level 2");
  } else {
    numberGrid = 49;
    console.log(numberGrid, "level 3");
  }


  for (let l = 0; arrayBomb.length < 16; l++) {
    const getRndNumber = Math.floor(Math.random() * (numberGrid - 1 + 1)) + 1;
    if (!arrayBomb.includes(getRndNumber)) {
      arrayBomb.push(getRndNumber);
    }
  }
  console.log(arrayBomb);
  
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
    //se non è una bomba, aggingo "bg-color-red" se è una bomba, aggiono il contatore.
    thisSquare.addEventListener("click", function () {
      if (arrayBomb.includes(thisNumber)){
        this.classList.add("bg-color-red");
        console.log(thisNumber, "BOOOOM");
      }else{
        this.classList.add("bg-color-blu");
        console.log(thisNumber);
        moveCounter.innerHTML = `Mossa n° ${q+1}`;
        q++
      }
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
  if (numberGrid === 100) {
    newSquare.classList.add("square-easy");
  } else if (numberGrid === 81) {
    newSquare.classList.add("square-medium");
  } else {
    newSquare.classList.add("square-hard");
  }
  newSquare.innerHTML = arrayNumber[i];
  return newSquare;
}
