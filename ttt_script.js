/////////////////// Variables and fixed components of the game

// Access board elements in the DOM
const playerTurn = document.querySelector(".turn")
const result = document.querySelector(".result")

// Accessing the 'board' in the DOM and converting it to an Array
const boardSquares = Array.from(document.querySelectorAll(".square"));
console.log(boardSquares)

// Create players markers and current player
const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne

// Create winning combos
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 6]
]

////////////////// Start the game
const startGame = function () {

    //loop through the board when a player clicks on a Square
    boardSquares.forEach(function(square) {
        function clickedSquare(square) {

            // this will check if square is empty and if it isn't then nothing changes
            if (square.target.innerText != "")
            return

            // set player turn and switch between players
            turn(square.target.id, currentPlayer)
            
            if (currentPlayer === playerOne) {
                currentPlayer = playerTwo
            } else {
                currentPlayer = playerOne
            }


        }
        //Create the turn function that places the player marker in a particular square
        function turn(squareId, player) {
            boardSquares[squareId] = player;
            document.querySelector(`#${squareId}`).innerText = player
        }
        // create event where a click on the square runs through the above functions to place a marker on a square
        square.addEventListener('click', clickedSquare)
    })   
}
// call the start game function
startGame()


// run through winning combos


// reset game



// console.log(winCombos)


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