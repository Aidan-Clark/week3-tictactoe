// When a user clicks on a tile, the tile is filled with their symbol
// The filled tiles can't be refilled
// Afterwards, the turn alternates
// 3 tiles in a row of the same symbol produces a win for that symbol
// Once a user has won, tiles can't be interacted with anymore
// If no one wins by the time the whole grid is filled, it's a draw
// The reset button empties all tiles, allows users to interact with them again, and clears the win

$(function() {
  var turn = "X";
  var $tds = $("td");
  var $reset = $("#reset");
  var $turnText = $(".playerTurn");
  var finished = false;
  var solutions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
  ];


  function tdClick() {
    if ($(this).hasClass("filled") == false && finished == false) {
      $(this).addClass(turn);
      $(this).addClass("filled")
      $(this).html(turn);
      checkSolution();

      if (turn == "X") {
        turn = "O"
      } else {
        turn = "X"
      }

      if (finished == false) {
        $turnText.html("It is " + turn + "'s turn");
      }
    }
  }


  function checkSolution() {
    for (i = 0; i < solutions.length; i++) {
      solution = solutions[i];
      if (
        $tds.eq(solution[0]).html() == turn &&
        $tds.eq(solution[1]).html() == turn &&
        $tds.eq(solution[2]).html() == turn
      ) {
        finished = true;
        $turnText.html(turn + " Wins!");
      }
    }

    var $filledTiles = $(".filled");

    if (
      $filledTiles.length == 9 && finished == false) {
      $turnText.html("It's a Draw!");
      finished = true;
    }
  }


  function resetClick() {
    $tds.removeClass("X");
    $tds.removeClass("O");
    $tds.removeClass("filled");
    $tds.html("");
    turn = "X";
    finished = false;
    $turnText.html("It is X's turn")
  }


  $tds.click(tdClick);
  $reset.click(resetClick)

});
