const X_CLASS = 'dog'
const CIRCLE_CLASS = 'cat'
const cellElements = document.querySelectorAll('[data-cell')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const winningImageElement = document.getElementById('winningImage');
const winningAudioElement = document.getElementById('winningAudio')
const desiredDuration = 7;

let circleTurn 

const WINNING_COMBINATIONS = [
        // Rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Columns
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonals
        [0, 4, 8],
        [2, 4, 6],
]
const restartButton1 = document.getElementById ('restartButton')
const restartButton2 = document.getElementById ('restartButtonOnScreen')

startGame()

restartButton1.addEventListener('click', startGame)
restartButton2.addEventListener('click', startGame)

function startGame(){
    circleTurn = false
    cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click',handleClick)
    cell.addEventListener('click', handleClick, {once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
    winningAudioElement.pause();
    winningAudioElement.currentTime = 0
}

function handleClick (e){
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)){
        console.log('Winner')
        endGame (false)
    } else if (isDraw()) {
        endGame(true)
    } else { swapTurns()
    setBoardHoverClass()
    }
  
}

function endGame(draw) {
    if (draw) {
        winningAudioElement.src = 'images/Cat-Vs-Dog-Fight.mp3'
        winningMessageTextElement.innerText = 'Draw!'
        winningImageElement.src = 'images/fighting.gif';
        winningImageElement.alt = 'DRAW'
        
    } else {
        const winner = circleTurn ? 'CAT' : 'DOGE';
        winningMessageTextElement.innerText = `${winner} Wins!`;

        // Set the image source based on the winner
        if (winner === 'CAT') {
            winningAudioElement.src = 'images/Cat-Vs-Dog-Fight.mp3'
            winningImageElement.src = 'images/CAT.png';
            winningImageElement.alt = 'Cat';
            
        } else {
            winningAudioElement.src = 'images/Cat-Vs-Dog-Fight.mp3'
            winningImageElement.src = 'images/DOG.png';
            winningImageElement.alt = 'Dog';
        }
    }

    winningMessageElement.classList.add('show');
     winningAudioElement.currentTime = 0; 
     winningAudioElement.play();
 
     setTimeout(() => {
         winningAudioElement.pause();
     }, desiredDuration * 1000); 
}

function isDraw (){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
        cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
  
    // Check if it's a cat or dog and play the appropriate sound
    if (currentClass === CIRCLE_CLASS) {
      placeCatOrDogInCell(cell, "cat");
    } else if (currentClass === X_CLASS) {
      placeCatOrDogInCell(cell, "dog");
    }
  }

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn){
        board.classList.add(CIRCLE_CLASS)
        } else {
        board.classList.add(X_CLASS)
        }
}

function checkWin (currentClass) {
    return WINNING_COMBINATIONS.some (combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}


const catSound = document.getElementById("catSound");
const dogSound = document.getElementById("dogSound");

function placeCatOrDogInCell(cell, type) {
  
  cell.classList.add(type);

  if (type === "cat") {
    catSound.play();
  } else if (type === "dog") {
    dogSound.play();
  }
}