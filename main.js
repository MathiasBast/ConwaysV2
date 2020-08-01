function makeBoard (length) {
  var board = new Array(length * length).fill(0)
  board = makeAlive(board)
  return board
}

function makeAlive (board) {
  board.forEach((item, index) => {
    var RandomNumber = Math.random().toFixed(2) * Math.floor(1)
    if (RandomNumber > 0.6) {
      board[index] = 1
    }
  })
  return board
}

makeBoard(5)
