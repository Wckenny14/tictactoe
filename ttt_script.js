/////////////////// Variables and fixed components of the game

// Access board elements in the DOM
const playerTurn = document.querySelector(".turn")
const result = document.querySelector(".result")
const reset = document.querySelector(".reset")

// Accessing the 'board' in the DOM and converting it to an Array
const boardSquares = Array.from(document.querySelectorAll(".square"));

// Create players markers and current player
const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne

// Create variable to begin counting through the board after a players turn
let count = 0;

// Create winning combos
// const winCombos = [
//     [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    // [0, 4, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [3, 4, 6]
// ]

////////////////// Running the game
const startGame = function() {
    
    //loop through the board when a player clicks on a Square
    boardSquares.forEach(function(square) {
        function clickedSquare(square) {

            // this will check if square is empty and if it isn't then nothing changes
            if (square.target.innerText != "")
            return

            // set player turn and switch between players
            turn(square.target.id, currentPlayer)
            if (currentPlayer === playerOne) {
                currentPlayer = playerTwo;
                playerTurn.innerHTML = "Player 2's turn";
            } else {
                currentPlayer = playerOne;
                playerTurn.innerHTML = "Player 1's turn"
            }
            count++;
            console.log(count)
            checkWinner();
        }
        //Create the turn function that places the player marker in a particular square
        function turn(squareId, player) {
            document.querySelector(`#${squareId}`).innerText = player
        }
        // create event where a click on the square runs through the above functions to place a marker on a square
        square.addEventListener('click', clickedSquare)
    })   
}
///////////// Check for winner
function checkWinner() {
    if ((boardSquares[0].innerText === playerOne && boardSquares[1].innerText === playerOne && boardSquares[2].innerText === playerOne) || 
        (boardSquares[3].innerText === playerOne && boardSquares[4].innerText === playerOne && boardSquares[5].innerText === playerOne) || 
        (boardSquares[6].innerText === playerOne && boardSquares[7].innerText === playerOne && boardSquares[8].innerText === playerOne) || 
        (boardSquares[0].innerText === playerOne && boardSquares[3].innerText === playerOne && boardSquares[6].innerText === playerOne) || 
        (boardSquares[1].innerText === playerOne && boardSquares[4].innerText === playerOne && boardSquares[7].innerText === playerOne) || 
        (boardSquares[2].innerText === playerOne && boardSquares[5].innerText === playerOne && boardSquares[8].innerText === playerOne) || 
        (boardSquares[0].innerText === playerOne && boardSquares[4].innerText === playerOne && boardSquares[8].innerText === playerOne) || 
        (boardSquares[2].innerText === playerOne && boardSquares[4].innerText === playerOne && boardSquares[6].innerText === playerOne)) {
            result.innerHTML = 'Player 1 Wins!';
            result.style.display = 'flex'
    } else if ((boardSquares[0].innerText === playerTwo && boardSquares[1].innerText === playerTwo && boardSquares[2].innerText === playerTwo) || 
        (boardSquares[3].innerText === playerTwo && boardSquares[4].innerText === playerTwo && boardSquares[5].innerText === playerTwo) || 
        (boardSquares[6].innerText === playerTwo && boardSquares[7].innerText === playerTwo && boardSquares[8].innerText === playerTwo) || 
        (boardSquares[0].innerText === playerTwo && boardSquares[3].innerText === playerTwo && boardSquares[6].innerText === playerTwo) || 
        (boardSquares[1].innerText === playerTwo && boardSquares[4].innerText === playerTwo && boardSquares[7].innerText === playerTwo) || 
        (boardSquares[2].innerText === playerTwo && boardSquares[5].innerText === playerTwo && boardSquares[8].innerText === playerTwo) || 
        (boardSquares[0].innerText === playerTwo && boardSquares[4].innerText === playerTwo && boardSquares[8].innerText === playerTwo) || 
        (boardSquares[2].innerText === playerTwo && boardSquares[4].innerText === playerTwo && boardSquares[6].innerText === playerTwo)) {
            result.innerHTML = 'Player 2 Wins!';
            result.style.display = 'flex'
    } else
        // check for a tie - all squares filled and no winner
        // console.log('if tie', count)
        if (count == 9) {
            result.innerHTML = 'Tie!';
            result.style.display = 'flex'
            // return;
        }
    }

//////// Stretch goal - Reset the game
function resetGame() {
    for (let i = 0; i < 9; i++) {
        boardSquares[i].innerText = ''
    }
        result.style.display = 'none';
        playerTurn.innerText = "Player 1's turn";
        currentPlayer = playerOne;
        count = 0
}
// start game
startGame()

let score = 0
let scoreUpOne = document.querySelector('.scoreOne');
let scoreUpTwo = document.querySelector('.scoreTwo');

const increase = function () {
    if (result.innerHTML === 'Player 2 Wins!') {
            score += 1;
            scoreUpTwo.textContent = score
    } else if 
        (result.innerHTML === 'Player 1 Wins') {
            score +=1;
            scoreUpOne.textContent = score
        } else {
            score = 0
        }
        
    }
increase()





///////// Alternate way of adding player marker to square and switching players

//         // listen out for a click on a square in the board and take action when it happens
//         square.addEventListener('click', function () {

//             // check if square is empty when clicked. If not empty then do nothing
//             if (square.innerText.trim() != "") return

//             // place playerOnes marker into the square that was clicked
//             square.innerText = currentPlayer
            
//             // switch players after each click
//             currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne
//         })
    
// })
// }