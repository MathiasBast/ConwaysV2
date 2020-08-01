function makeBoard (length) {
  var board = new Array(length * length).fill(0)
  board = makeAlive(board)
  return board
}



makeBoard(5)
