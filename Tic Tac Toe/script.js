// Game state
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

// Function to make a move
function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWin()) {
            alert('Player ' + currentPlayer + ' wins!');
            resetBoard();
        } else if (board.indexOf('') === -1) {
            alert('It\'s a tie!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Function to check for a win
function checkWin() {
    for (let combination of winningCombinations) {
        if (board[combination[0]] !== '' && board[combination[0]] === board[combination[1]] && board[combination[1]] === board[combination[2]]) {
            return true;
        }
    }
    return false;
}

// Function to reset the board
function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}
