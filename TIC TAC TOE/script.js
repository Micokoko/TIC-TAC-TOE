const X_CLASS = 'dog'
const CIRCLE_CLASS = 'cat'
const cellElements = document.querySelectorAll('[data-cell')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
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
    if (draw){
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "CAT" :
 "DOGE" } Wins!`
    }
    winningMessageElement.classList.add('show')
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


// JavaScript
const catSound = document.getElementById("catSound");
const dogSound = document.getElementById("dogSound");

// Function to handle cell placement with cat or dog
function placeCatOrDogInCell(cell, type) {
  // Add class to cell based on type (cat or dog)
  cell.classList.add(type);

  // Play the appropriate sound
  if (type === "cat") {
    catSound.play();
  } else if (type === "dog") {
    dogSound.play();
  }
}