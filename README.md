Tic Cat Doge - Game Readme
Welcome to Tic Cat Doge! This is a simple web-based version of the classic Tic Tac Toe game with a fun twist featuring cats and dogs.

How to Play
The game is played on a 3x3 grid.
Two players take turns to play - one representing Dog (X) and the other representing Cat (O).
The goal is to be the first player to get three of their tokens in a row, either vertically, horizontally, or diagonally.
Functions
startGame(): Initializes the game, clears the board, and prepares for a new game.
handleClick(e): Handles the player's move when a cell is clicked, checks for wins or draws, and updates the board.
showMatchHistory(): Displays the match history mode and shows the moves made during the game.
showPreviousMove(): Displays the previous move during match review.
showNextMove(): Displays the next move during match review.
showMove(moveIndex): Displays the game board at a specific move index during match review.
endGame(draw): Ends the game and displays the winning message or a draw message.
isDraw(): Checks if the game is a draw.
placeMark(cell, currentClass): Places the current player's token on a cell.
swapTurns(): Swaps the turn between players.
setBoardHoverClass(): Sets the hover class on the game board for the current player's turn.
checkWin(currentClass): Checks if the current player has won.
placeCatOrDogInCell(cell, type): Places a cat or dog image in a cell and plays a corresponding sound.
updateWinCount(): Updates the display of win and draw counts on the screen.
Buttons and Event Listeners
restartButton1, restartButton2, restartButton3: Restart buttons for starting a new game.
previousButton, nextButton: Buttons for navigating the match history.
matchHistoryButton: Button for viewing the match history mode.
Event listeners are set up to respond to button clicks and cell clicks to trigger appropriate actions.
How to Use
Open the HTML file in a web browser.
Click on cells to place your tokens (Dog or Cat).
Play until one player wins or the game ends in a draw.
Use the restart button to start a new game.
Use the match history button to review moves made during the game.
Enjoy playing Tic Cat Doge - the dog and cat themed Tic Tac Toe game!
