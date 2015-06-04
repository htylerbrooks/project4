$(document).ready(function(){


  $("#new-game").click(function(){
    startGame();
  });

  $(".Square").click(function(){
    nextMove(this);
  });


  startGame();
});

  var x_win = 0;
  var y_win = 0;
// Start Game / Set message /Click Squares to Change Text

function startGame(){
  for (var i = 1; i <= 9; i = i+1){
    clearBox(i);
  }
  document.turn = "X";
  if (Math.random() < 0.5){
    document.turn = "O";
  }
  document.winner = null;
  setMessage(document.turn + " gets to start!");
}


// Set Message at Top of Game Board
function setMessage(msg){
  document.getElementById("message").innerText = msg;
}

// Set's text of square and then switches turn
// Also check's if square has been taken and lets user know
function nextMove(square) {
  if (document.winner !=null){
    setMessage(document.winner + " already won the game.");
  }
  else if (square.innerText == "+"){
    square.innerText = document.turn;
    switchTurn();
  } else {
    setMessage("That square has been taken!");
  }
}

//Switches turn and changes message
function switchTurn() {

  if (checkForWinner(document.turn)){
    setMessage("Congratulations, " + document.turn + "! You win!");
    document.winner = document.turn;
    if(document.winner == "X"){
      x_win++;
      $("#x_win").text(x_win);
    }else{
      y_win++;
      $("#y_win").text(y_win);
    }
  }else if (document.turn === "X"){
    document.turn = "O";
    setMessage(document.turn +"'s" + " Turn!");
  } else {
    document.turn = "X";
    setMessage(document.turn +"'s" + " Turn!");
  }
}

function checkForWinner(move){
  var result = false;
  if (checkRow(1,2,3, move) ||
  checkRow(4,5,6, move) ||
  checkRow(7,8,9, move) ||
  checkRow(1,4,7, move) ||
  checkRow(2,5,8, move) ||
  checkRow(3,6,9, move) ||
  checkRow(1,5,9, move) ||
  checkRow(3,5,7, move)) {
    result = true;
  }
  return result;
}

// Check's Row for Winning Condition
function checkRow(a, b, c, move){
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c)==move){
    result = true;
  }
  return result;
}

// Check's individual square for the innerText value
function getBox(number) {
  return document.getElementById("s" + number).innerText;
}

// Grab squares to clear
function clearBox(number){
  return document.getElementById("s" + number).innerText = "+";
}
