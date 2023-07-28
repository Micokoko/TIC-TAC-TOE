const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
let circleTurn;

let xWins = 0;
let oWins = 0;
let draws = 0;

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
];
const restartButton = document.getElementById('restartButton');

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        if (currentClass === X_CLASS) {
            xWins++;
        } else {
            oWins++;
        }
        updateWinCount();
        console.log('Winner');
        endGame(false);
    } else if (isDraw()) {
        console.log('Draw');
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
    }
    winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}

function updateWinCount() {
    const xWinsElement = document.getElementById('xWins');
    const oWinsElement = document.getElementById('oWins');
    xWinsElement.innerText = `X Wins: ${xWins}`;
    oWinsElement.innerText = `O Wins: ${oWins}`;
}
function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);

    if (checkWin(currentClass)) {
        if (currentClass === X_CLASS) {
            xWins++;
        } else {
            oWins++;
        }
        updateWinCount();
        console.log('Winner');
        endGame(false);
    } else if (isDraw()) {
        draws++;
        updateWinCount();
        console.log('Draw');
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function updateWinCount() {
    const xWinsElement = document.getElementById('xWins');
    const oWinsElement = document.getElementById('oWins');
    const drawsElement = document.getElementById('draws');
    xWinsElement.innerText = `X Wins: ${xWins}`;
    oWinsElement.innerText = `O Wins: ${oWins}`;
    drawsElement.innerText = `Draws: ${draws}`;
}