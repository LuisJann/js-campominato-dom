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

//VAR
let arrayNumber = [];
let arrayBomb = [];
const playBtn = document.getElementById("play-btn");
console.log(playBtn);
const level = document.getElementById("selector");
console.log(level);
let i = 0;

//ESECUZIONE
playBtn.addEventListener("click", function () {
  console.log("Nuova Partita!");
  arrayBomb = [];
  arrayNumber = [];
  const moveCounter = document.getElementById("counter");
  let q = 0;
  moveCounter.innerHTML = `Mossa n° ${q}`

//selezione il numeor di riquadri che voglio nella mia griglia
  const leveleSelected = parseInt(level.value);
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

//genero le bombe nel range del numero di caselle selezionato prima
  for (let l = 0; arrayBomb.length < 16; l++) {
    const getRndNumber = Math.floor(Math.random() * (numberGrid - 1 + 1)) + 1;
    if (!arrayBomb.includes(getRndNumber)) {
      arrayBomb.push(getRndNumber);
    }
  }
  console.log(arrayBomb);
  
  //azzero html per reset
  const row = document.querySelector(".row");
  row.innerHTML = "";

  //creo l'array in cui sono presenti il numero di caselle
  while (i < numberGrid) {
    arrayNumber.push(i + 1);
    i++
  }
  
  for (i = 0; i < arrayNumber.length; i++) {
    const thisNumber = arrayNumber[i];

    // Creo un elemento square
    const thisSquare = createSquare(thisNumber);
    
    // aggiungo eventListener allo square creato e aggiungo classe "bg-color-blu" 
    //se non è una bomba, aggingo "bg-color-red" se è una bomba, aggiorno il contatore mosse solo se non è già blu.
    thisSquare.addEventListener("click", function () {
      if (arrayBomb.includes(thisNumber)){
        this.classList.add("bg-color-red");
        console.log(thisNumber, "BOOOOM");
        moveCounter.innerHTML = `HAI TOTALIZZATO ${q} PUNTI`
      }else{
        if(this.classList.length <= 1){
          this.classList.add("bg-color-blu");
          console.log(this.classList.length);
          moveCounter.innerHTML = `Mossa n° ${q+1}`;
          q++
        } else {
          moveCounter.innerHTML = `Mossa n° ${q}`
        }
      }
    });
    // inserisco l'elemento nel DOM
    row.append(thisSquare);
  }
})


// FUNCTION

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