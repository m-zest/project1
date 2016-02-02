
/* MODEL */

/* DATA MODEL */

var won = false;
var currentPlayer = "X";
var a = ''
var b = ''
var c = ''
var d = ''
var e = ''
var f = ''
var g = ''
var h = ''
var i = ''
var j = ''
var k = ''
var l = ''
var m = ''
var n = ''
var o = ''
var p = ''
var q = ''
var r = ''
var s = ''
var t = ''
var u = ''
var v = ''
var w = ''
var x = ''
var y = ''
var z = ''

var boardCenterPlaneA = [
  a, b, c,// A, B, C Center Side/Plane
  d, e, f,// D, E ,F
  g, h, i // G, H, I
];

var boardRightPlaneB = [
  c, j, k, // C, J, K Right Side/Plane
  f, l, m, // F, L ,M
  i, n, o // I, N, O
];

var boardBackPlaneC = [
  k, p, q, // K, P, Q Back Rear Side/Plane
  m, r, s, // M, R ,S
  o, t, u //  O, T, U

];

var boardLeftPlaneD = [
  q, v, a, // Q, V, A Left Side/Plane
  s, w, d, // S, W ,D
  u, x, g // U, X, G
];

var boardTopPlaneE = [
  q, p, k, // Q, P, K Up Top Side/Plane
  v, z, j, // V, Z ,J
  a, b, c // A, B, C
];

var boardDownPlaneF = [
  g, h, i, // G, H, I Down Bottom Side/Plane
  x, y, n, // X, Y ,N
  u, t, o // U, T, O
];

var startGame = function() {
  won = false;
  currentPlayer = "X";
  boardCenterPlaneA = [
  a, b, c,// A, B, C Center Side/Plane
  d, e, f,// D, E ,F
  g, h, i // G, H, I
];

 boardRightPlaneB = [
  c, j, k, // C, J, K Right Side/Plane
  f, l, m, // F, L ,M
  i, n, o // I, N, O
];

  boardBackPlaneC = [
  k, p, q, // K, P, Q Back Rear Side/Plane
  m, r, s, // M, R ,S
  o, t, u //  O, T, U
  ];

  boardLeftPlaneD = [
  q, v, a, // Q, V, A Left Side/Plane
  s, w, d, // S, W ,D
  u, x, g // U, X, G
  ];

  boardTopPlaneE = [
  q, p, k, // Q, P, K Up Top Side/Plane
  v, z, j, // V, Z ,J
  a, b, c // A, B, C
  ];

  boardDownPlaneF = [
  g, h, i, // G, H, I Down Bottom Side/Plane
  x, y, n, // X, Y ,N
  u, t, o // U, T, O
  ];
};

/* BEHAVIOR */

var move = function(cellIndex) {
  boardCenterPlaneA[cellIndex] = currentPlayer;
  refreshBoard();
  if (gameWon()) {
    won = true;
  } else {
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    // currentPlayer = (currentPlayer === "X" ? "O" : "X");
  }
};

function refreshBoard() {
  boardCenterPlaneA = [
  a, b, c,// A, B, C Center Side/Plane
  d, e, f,// D, E ,F
  g, h, i // G, H, I
];
  boardRightPlaneB = [
  c, j, k, // C, J, K Right Side/Plane
  f, l, m, // F, L ,M
  i, n, o // I, N, O
];
 boardBackPlaneC = [
  k, p, q, // K, P, Q Back Rear Side/Plane
  m, r, s, // M, R ,S
  o, t, u //  O, T, U
  ];

  boardLeftPlaneD = [
  q, v, a, // Q, V, A Left Side/Plane
  s, w, d, // S, W ,D
  u, x, g // U, X, G
  ];

  boardTopPlaneE = [
  q, p, k, // Q, P, K Up Top Side/Plane
  v, z, j, // V, Z ,J
  a, b, c // A, B, C
  ];

  boardDownPlaneF = [
  g, h, i, // G, H, I Down Bottom Side/Plane
  x, y, n, // X, Y ,N
  u, t, o // U, T, O
  ];
}

var gameWon = function() {
  if (

    ((boardCenterPlaneA[0] === boardCenterPlaneA[1]) && (boardCenterPlaneA[0] === boardCenterPlaneA[2]) && boardCenterPlaneA[0] !== "") ||
    ((boardCenterPlaneA[3] === boardCenterPlaneA[4]) && (boardCenterPlaneA[3] === boardCenterPlaneA[5]) && boardCenterPlaneA[3] !== "") ||
    ((boardCenterPlaneA[6] === boardCenterPlaneA[7]) && (boardCenterPlaneA[6] === boardCenterPlaneA[8]) && boardCenterPlaneA[6] !== "") ||
    ((boardCenterPlaneA[0] === boardCenterPlaneA[3]) && (boardCenterPlaneA[0] === boardCenterPlaneA[6]) && boardCenterPlaneA[0] !== "") ||
    ((boardCenterPlaneA[1] === boardCenterPlaneA[4]) && (boardCenterPlaneA[1] === boardCenterPlaneA[7]) && boardCenterPlaneA[1] !== "") ||
    ((boardCenterPlaneA[2] === boardCenterPlaneA[5]) && (boardCenterPlaneA[2] === boardCenterPlaneA[8]) && boardCenterPlaneA[2] !== "") ||
    ((boardCenterPlaneA[0] === boardCenterPlaneA[4]) && (boardCenterPlaneA[0] === boardCenterPlaneA[8]) && boardCenterPlaneA[0] !== "") ||
    ((boardCenterPlaneA[2] === boardCenterPlaneA[4]) && (boardCenterPlaneA[2] === boardCenterPlaneA[6]) && boardCenterPlaneA[2] !== "") ||

    ((boardRightPlaneB[0] === boardRightPlaneB[1]) && (boardRightPlaneB[0] === boardRightPlaneB[2]) && boardRightPlaneB[0] !== "") ||
    ((boardRightPlaneB[3] === boardRightPlaneB[4]) && (boardRightPlaneB[3] === boardRightPlaneB[5]) && boardRightPlaneB[3] !== "") ||
    ((boardRightPlaneB[6] === boardRightPlaneB[7]) && (boardRightPlaneB[6] === boardRightPlaneB[8]) && boardRightPlaneB[6] !== "") ||
    ((boardRightPlaneB[0] === boardRightPlaneB[3]) && (boardRightPlaneB[0] === boardRightPlaneB[6]) && boardRightPlaneB[0] !== "") ||
    ((boardRightPlaneB[1] === boardRightPlaneB[4]) && (boardRightPlaneB[1] === boardRightPlaneB[7]) && boardRightPlaneB[1] !== "") ||
    ((boardRightPlaneB[2] === boardRightPlaneB[5]) && (boardRightPlaneB[2] === boardRightPlaneB[8]) && boardRightPlaneB[2] !== "") ||
    ((boardRightPlaneB[0] === boardRightPlaneB[4]) && (boardRightPlaneB[0] === boardRightPlaneB[8]) && boardRightPlaneB[0] !== "") ||
    ((boardRightPlaneB[2] === boardRightPlaneB[4]) && (boardRightPlaneB[2] === boardRightPlaneB[6]) && boardRightPlaneB[2] !== "") ||

    ((boardBackPlaneC[0] === boardBackPlaneC[1]) && (boardBackPlaneC[0] === boardBackPlaneC[2]) && boardBackPlaneC[0] !== "") ||
    ((boardBackPlaneC[3] === boardBackPlaneC[4]) && (boardBackPlaneC[3] === boardBackPlaneC[5]) && boardBackPlaneC[3] !== "") ||
    ((boardBackPlaneC[6] === boardBackPlaneC[7]) && (boardBackPlaneC[6] === boardBackPlaneC[8]) && boardBackPlaneC[6] !== "") ||
    ((boardBackPlaneC[0] === boardBackPlaneC[3]) && (boardBackPlaneC[0] === boardBackPlaneC[6]) && boardBackPlaneC[0] !== "") ||
    ((boardBackPlaneC[1] === boardBackPlaneC[4]) && (boardBackPlaneC[1] === boardBackPlaneC[7]) && boardBackPlaneC[1] !== "") ||
    ((boardBackPlaneC[2] === boardBackPlaneC[5]) && (boardBackPlaneC[2] === boardBackPlaneC[8]) && boardBackPlaneC[2] !== "") ||
    ((boardBackPlaneC[0] === boardBackPlaneC[4]) && (boardBackPlaneC[0] === boardBackPlaneC[8]) && boardBackPlaneC[0] !== "") ||
    ((boardBackPlaneC[2] === boardBackPlaneC[4]) && (boardBackPlaneC[2] === boardBackPlaneC[6]) && boardBackPlaneC[2] !== "") ||

    ((boardLeftPlaneD[0] === boardLeftPlaneD[1]) && (boardLeftPlaneD[0] === boardLeftPlaneD[2]) && boardLeftPlaneD[0] !== "") ||
    ((boardLeftPlaneD[3] === boardLeftPlaneD[4]) && (boardLeftPlaneD[3] === boardLeftPlaneD[5]) && boardLeftPlaneD[3] !== "") ||
    ((boardLeftPlaneD[6] === boardLeftPlaneD[7]) && (boardLeftPlaneD[6] === boardLeftPlaneD[8]) && boardLeftPlaneD[6] !== "") ||
    ((boardLeftPlaneD[0] === boardLeftPlaneD[3]) && (boardLeftPlaneD[0] === boardLeftPlaneD[6]) && boardLeftPlaneD[0] !== "") ||
    ((boardLeftPlaneD[1] === boardLeftPlaneD[4]) && (boardLeftPlaneD[1] === boardLeftPlaneD[7]) && boardLeftPlaneD[1] !== "") ||
    ((boardLeftPlaneD[2] === boardLeftPlaneD[5]) && (boardLeftPlaneD[2] === boardLeftPlaneD[8]) && boardLeftPlaneD[2] !== "") ||
    ((boardLeftPlaneD[0] === boardLeftPlaneD[4]) && (boardLeftPlaneD[0] === boardLeftPlaneD[8]) && boardLeftPlaneD[0] !== "") ||
    ((boardLeftPlaneD[2] === boardLeftPlaneD[4]) && (boardLeftPlaneD[2] === boardLeftPlaneD[6]) && boardLeftPlaneD[2] !== "") ||

    ((boardTopPlaneE[0] === boardTopPlaneE[1]) && (boardTopPlaneE[0] === boardTopPlaneE[2]) && boardTopPlaneE[0] !== "") ||
    ((boardTopPlaneE[3] === boardTopPlaneE[4]) && (boardTopPlaneE[3] === boardTopPlaneE[5]) && boardTopPlaneE[3] !== "") ||
    ((boardTopPlaneE[6] === boardTopPlaneE[7]) && (boardTopPlaneE[6] === boardTopPlaneE[8]) && boardTopPlaneE[6] !== "") ||
    ((boardTopPlaneE[0] === boardTopPlaneE[3]) && (boardTopPlaneE[0] === boardTopPlaneE[6]) && boardTopPlaneE[0] !== "") ||
    ((boardTopPlaneE[1] === boardTopPlaneE[4]) && (boardTopPlaneE[1] === boardTopPlaneE[7]) && boardTopPlaneE[1] !== "") ||
    ((boardTopPlaneE[2] === boardTopPlaneE[5]) && (boardTopPlaneE[2] === boardTopPlaneE[8]) && boardTopPlaneE[2] !== "") ||
    ((boardTopPlaneE[0] === boardTopPlaneE[4]) && (boardTopPlaneE[0] === boardTopPlaneE[8]) && boardTopPlaneE[0] !== "") ||
    ((boardTopPlaneE[2] === boardTopPlaneE[4]) && (boardTopPlaneE[2] === boardTopPlaneE[6]) && boardTopPlaneE[2] !== "") ||

    ((boardDownPlaneF[0] === boardDownPlaneF[1]) && (boardDownPlaneF[0] === boardDownPlaneF[2]) && boardDownPlaneF[0] !== "") ||
    ((boardDownPlaneF[3] === boardDownPlaneF[4]) && (boardDownPlaneF[3] === boardDownPlaneF[5]) && boardDownPlaneF[3] !== "") ||
    ((boardDownPlaneF[6] === boardDownPlaneF[7]) && (boardDownPlaneF[6] === boardDownPlaneF[8]) && boardDownPlaneF[6] !== "") ||
    ((boardDownPlaneF[0] === boardDownPlaneF[3]) && (boardDownPlaneF[0] === boardDownPlaneF[6]) && boardDownPlaneF[0] !== "") ||
    ((boardDownPlaneF[1] === boardDownPlaneF[4]) && (boardDownPlaneF[1] === boardDownPlaneF[7]) && boardDownPlaneF[1] !== "") ||
    ((boardDownPlaneF[2] === boardDownPlaneF[5]) && (boardDownPlaneF[2] === boardDownPlaneF[8]) && boardDownPlaneF[2] !== "") ||
    ((boardDownPlaneF[0] === boardDownPlaneF[4]) && (boardDownPlaneF[0] === boardDownPlaneF[8]) && boardDownPlaneF[0] !== "") ||
    ((boardDownPlaneF[2] === boardDownPlaneF[4]) && (boardDownPlaneF[2] === boardDownPlaneF[6]) && boardDownPlaneF[2] !== "")

  ) {
    return true;
  } else {
    return false;
  }
};


/* RENDER OUR VIEW */

/*var render = function() {
  // Render Turn Counter Component
  var $turnEl = $("#turn")
  $turnEl.text("Turn: " + currentPlayer);

  // Render Winner Component
  var $winnerEl = $("#winner");
  renderboard();
  if (!won) {
    $winnerEl.text("Winner: ?");
  } else {
    $winnerEl.text("Winner: " + currentPlayer);
    alert("Yo dawg, I can't believe " + currentPlayer + " just won!! DAYYUM!")
  }
};*/

// As an example, we can "render" a component separately
// in a function, just calling it above. This can help
// us test it, or even just deal with REALLY long render
// functions, breaking them up in to smaller ones.
var renderboard = function() {
  $("#cellA0").text(boardCenterPlaneA[0]);
  $("#cellA1").text(boardCenterPlaneA[1]);
  $("#cellA2").text(boardCenterPlaneA[2]);
  $("#cellA3").text(boardCenterPlaneA[3]);
  $("#cellA4").text(boardCenterPlaneA[4]);
  $("#cellA5").text(boardCenterPlaneA[5]);
  $("#cellA6").text(boardCenterPlaneA[6]);
  $("#cellA7").text(boardCenterPlaneA[7]);
  $("#cellA8").text(boardCenterPlaneA[8]);

  $("#cellB0").text(boardRightPlaneB[0]);
  $("#cellB1").text(boardRightPlaneB[1]);
  $("#cellB2").text(boardRightPlaneB[2]);
  $("#cellB3").text(boardRightPlaneB[3]);
  $("#cellB4").text(boardRightPlaneB[4]);
  $("#cellB5").text(boardRightPlaneB[5]);
  $("#cellB6").text(boardRightPlaneB[6]);
  $("#cellB7").text(boardRightPlaneB[7]);
  $("#cellB8").text(boardRightPlaneB[8]);

  $("#cellC0").text(boardBackPlaneC[0]);
  $("#cellC1").text(boardBackPlaneC[1]);
  $("#cellC2").text(boardBackPlaneC[2]);
  $("#cellC3").text(boardBackPlaneC[3]);
  $("#cellC4").text(boardBackPlaneC[4]);
  $("#cellC5").text(boardBackPlaneC[5]);
  $("#cellC6").text(boardBackPlaneC[6]);
  $("#cellC7").text(boardBackPlaneC[7]);
  $("#cellC8").text(boardBackPlaneC[8]);

  $("#cellD0").text(boardLeftPlaneD[0]);
  $("#cellD1").text(boardLeftPlaneD[1]);
  $("#cellD2").text(boardLeftPlaneD[2]);
  $("#cellD3").text(boardLeftPlaneD[3]);
  $("#cellD4").text(boardLeftPlaneD[4]);
  $("#cellD5").text(boardLeftPlaneD[5]);
  $("#cellD6").text(boardLeftPlaneD[6]);
  $("#cellD7").text(boardLeftPlaneD[7]);
  $("#cellD8").text(boardLeftPlaneD[8]);

  $("#cellE0").text(boardTopPlaneE[0]);
  $("#cellE1").text(boardTopPlaneE[1]);
  $("#cellE2").text(boardTopPlaneE[2]);
  $("#cellE3").text(boardTopPlaneE[3]);
  $("#cellE4").text(boardTopPlaneE[4]);
  $("#cellE5").text(boardTopPlaneE[5]);
  $("#cellE6").text(boardTopPlaneE[6]);
  $("#cellE7").text(boardTopPlaneE[7]);
  $("#cellE8").text(boardTopPlaneE[8]);

  $("#cellF0").text(boardDownPlaneF[0]);
  $("#cellF1").text(boardDownPlaneF[1]);
  $("#cellF2").text(boardDownPlaneF[2]);
  $("#cellF3").text(boardDownPlaneF[3]);
  $("#cellF4").text(boardDownPlaneF[4]);
  $("#cellF5").text(boardDownPlaneF[5]);
  $("#cellF6").text(boardDownPlaneF[6]);
  $("#cellF7").text(boardDownPlaneF[7]);
  $("#cellF8").text(boardDownPlaneF[8]);

  // for (var i = 0; i < board.length; i++) {
  //   $("cell" + i).text(board[i]);
  // }
}

/* USER INTERACTION */

$("#restart").click(function(evt) {
  startGame();
  render();
});

$("#board").delegate("td", "click", function() {
  var $cellEl    = $(this);
  var cellIndex = $cellEl.attr('id').slice(-1);

  if (!won && $cellEl.text() === "") {
    move(cellIndex);
    render();
  } else if (!won && $cellEl.text() !== "") {
    $cellEl.addClass("fade-in");
    setTimeout(function() {
      $cellEl.addClass("fade-out");
    }, 1000);
    setTimeout(function() {
      $cellEl.removeClass("fade-in");
      $cellEl.removeClass("fade-out");
    }, 2000);
  }




//Corner Relations

//Side Relations

//Centers - No Relations


}); //END OF PAGE FUNCTION



//NOTES

//GRID




//  If Sum of Cells in single board === 3 X wins ||
//   If Sum of Cells in single board === -3 0 wins

var render = function() {
  gameWon();
}


