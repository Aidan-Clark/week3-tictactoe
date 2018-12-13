$(function() {
  var turn = "X";
  var $tds = $("td");
  var $reset = $("#reset");
  var $turnText = $(".playerTurn");
  var solutions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
  ]

  function tdClick() {
    $(this).addClass(turn)
    $(this).html(turn)
    checkSolution();

    if (turn == "X") {
      turn = "O"
    } else {
      turn = "X"
    }

    $turnText.html("It is " + turn + "'s turn")
  }

  function resetClick() {
    $tds.removeClass("X");
    $tds.removeClass("O");
    $tds.html("");
    turn = "X";
    $turnText.html("It is X's turn")
  }

  function checkSolution() {}

  $tds.click(tdClick);
  $reset.click(resetClick)



});
