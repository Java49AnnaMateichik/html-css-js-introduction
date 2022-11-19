const answer = ["java", "length","css","array"];
 const question = ["programing language","a property of arrays in JavaScript that returns or sets the number of elements in a given array",
"language for describing the presentation of Web pages, including colors, layout, and fonts",
"a collection of elements of the same type placed in contiguous memory locations that can be individually referenced by using an index to a unique identifier"];

const words =[ ["programing language","java"],
 ["a property of arrays in JavaScript that returns or sets the number of elements in a given array","length"],
 ["language for describing the presentation of Web pages, including colors, layout, and fonts","css"],
 ["a collection of elements of the same type placed in contiguous memory locations that can be individually referenced by using an index to a unique identifier","array"]
];

let word;
let index = 0;
let prevInd = -1;
let searchWordAr = [];
const sectionElement = document.querySelector(".word-guess");
let searchWordArLen = 0;
sectionElement.innerHTML = getDivsElements();
const letterElements = document.querySelectorAll(".letter-guess");
const trialNumElement = document.querySelector(".tial-number");
const trialsElement = document.querySelector(".word-trials");
const gameOverElement = document.querySelector(".game-over-message");
const invintationElement = document.querySelector(".guess-invintation");
//const playAgainElement = document.getElementById("play-again");

let flGameOver = false;
let trials = 0;

function getDivsElements() {
    index = getIndex();
    //let index = Math.floor(Math.random() * words.length);
   console.log('word=', words[index][1]);
   word = words[index][1];
    //let wordField = words[index];
    searchWordAr = Array.from(word );
    let res = searchWordAr.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}
function getIndex() {
    index = Math.floor(Math.random() * words.length);
    while(index == prevInd) { 
    index = Math.floor(Math.random() * words.length);
}
prevInd = index;
return index;

}
function showTrialsMessage(trials,word) {
    
        trialNumElement.innerHTML = 
        `You've done ${trials} guess trials`;
        trialsElement.innerHTML =`Yor word is ${word}`;
    
   
}

function startGame() {
    if(flGameOver){
        sectionElement.innerHTML = getDivsElements();
        flGameOver = false;
    }
    trials = 0;
    searchWordArLen = 0;
    flGameOver = false;
    gameOverElement.innerHTML = "";
    invintationElement.innerHTML = `Guess the word as ${words[index][0]}`;
    //letterElements[2].style.background="white"
}

function onChange(event) {
    const wordGuess = event.target.value.toLowerCase();
    event.target.value = '';
    if (flGameOver) {
        alert("game is over");
        return;
    }
    trials++;
    showTrialsMessage(trials,wordGuess);
    const wordAr = Array.from(wordGuess); 
    let colors = searchWordAr.map((l) => {
        return wordAr.includes(l) ? 'white' : 'black';
    })
    colors.forEach((color,index) => {
        if(color === 'white') {
            if(letterElements[index].style.background !== 'white') {
                searchWordArLen++;
                letterElements[index].style.background = c;
            } 
        }
    });
    if(searchWordArLen === searchWordAr.length) {
        endGame(true);
    }
}
     
    // if (wordGuess.length != N_LETTERS) {
    //     alert(`A word should contain ${N_LETTERS} letters`)
    // } else {
    //     const wordAr = Array.from(wordGuess);
    //     wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
    //     const colors = wordAr.map((letter, i) => {
    //         let index = word.indexOf(letter);
    //         let res = 'red';
    //         if (index  > -1) {
    //             res = letter == word[i] ? 'green' : 'yellow'
    //         }
    //         return res;
    //     })
    //     colors.forEach((c, i) =>
    //      letterElements[i].style.color=c)
    // }
    // const res = wordGuess == word;
    // if (trials == 0 || res) {
    //     endGame(res);
    // }
    
function endGame(isSuccess) {
    if (isSuccess) {
        gameOverElement.innerHTML =  `Congratulations you're winner. Amount of trials is ${trials}`;
        gameOverElement.style.color = "green"
        invintationElement.innerHTML = '';
     } //else {
    //     gameOverElement.innerHTML =  "Sorry you are loser";
    //     gameOverElement.style.color = "red"
    // }
   
   //playAgainElement.style.display='block';
   trialNumElement.innerHTML = '';
   trialsElement.innerHTML = '';
   flGameOver = true;
//     
  
}
startGame()