$(function(){
  console.log("Lets Do It!")


  $("#new-game").click(function(){
    startGame();
  });

  startGame();
});

function startGame() {
  var columns = $('.column');
  var COUNTER = 6;
  var turn = true;
  var gameBoard = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [5   ,    5,    5,    5,    5,    5]
  ];

  columns.on('click', function(){
    column = $(this);
    columnId = column.attr('id');
    if (gameBoard[COUNTER][columnId] >= 0)
    turn = playPiece(gameBoard, columnId, turn);
  });
}

var playPiece = function(board, column, turn) {
  var color = turn ? 'red' : 'black'
  var row = board[6][column];
  board[row][column] = color;

  setPieceColor(row, column, color);

  if (checkWin(board, row, column)) {
    disableClicks(board);
    notifyWinner(color);

  }
}

// var setPieceColor = function(row, column,color){
//
// };

// var disableClicks = function(board) {
//
// };

  // var notifyWinner = function(color) {

// }


// var checkWin = function(gameBoard,row, col){
//
// };

  // var setPieceColor = function(row, column, color) {

// }


// var checkHorizontalLeft = function(gameBoard, row, col) {
//
// };

  // var checkHorizontalRight = function(gameBoard, row, col){
  //
  // };

  // var checkVerticalDown = function(gameBoard, row, col){
  //
  // };

  // var checkDiagonalNE = function(gameBoard, row, col){
  //
  // };

  // var checkDiagonalSE = function(gameBoard, row, col){
  //
  // };

  // var checkDiagonalSW = function(gameBoard, row, col){
  //
  // };

//   // var determineWinner = function(){
//
//   };

// var getId = function(arr) {
//
// };




};
