


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

// var corner = function(){
// if (boardCenterPlaneA[0] === currentPlayer) {
// boardLeftPlaneD[2] = currentPlayer; boardTopPlaneE[6] = currentPlayer;
// };
// if (boardLeftPlaneD[2] === currentPlayer) {
// boardCenterPlaneA[0] = currentPlayer; boardTopPlaneE[6] = currentPlayer;
// };
// if (boardTopPlaneE[6] === currentPlayer) {
// boardCenterPlaneA[0] = currentPlayer; boardLeftPlaneD[2] = currentPlayer;
// };
// }



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
  $("#cell0").text(boardCenterPlaneA[0]);
  $("#cell1").text(boardCenterPlaneA[1]);
  $("#cell2").text(boardCenterPlaneA[2]);
  $("#cell3").text(boardCenterPlaneA[3]);
  $("#cell4").text(boardCenterPlaneA[4]);
  $("#cell5").text(boardCenterPlaneA[5]);
  $("#cell6").text(boardCenterPlaneA[6]);
  $("#cell7").text(boardCenterPlaneA[7]);
  $("#cell8").text(boardCenterPlaneA[8]);

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
boardCenterPlaneA[0] == boardLeftPlaneD[2] && boardCenterPlaneA[0] == boardTopPlaneE[6] &&
boardLeftPlaneD[2] == boardTopPlaneE[6];
boardCenterPlaneA[2] == boardTopPlaneE[8] && boardCenterPlaneA[2] == boardRightPlaneB[0] &&
boardTopPlaneE[8] == boardRightPlaneB[0];
boardCenterPlaneA[6] == boardLeftPlaneD[8] && boardCenterPlaneA[6] == boardDownPlaneF[0] &&
boardLeftPlaneD[8] == boardDownPlaneF[0];
boardCenterPlaneA[8] == boardDownPlaneF[2] && boardCenterPlaneA[8] == boardRightPlaneB[6] &&
boardDownPlaneF[2] == boardRightPlaneB[6];
boardRightPlaneB[2] == boardBackPlaneC[0] && boardRightPlaneB[2] == boardTopPlaneE[2] &&
boardBackPlaneC[0] == boardTopPlaneE[2];
boardRightPlaneB[8] == boardBackPlaneC[6] && boardRightPlaneB[8] == boardDownPlaneF[8] &&
boardBackPlaneC[6] == boardDownPlaneF[8];
boardBackPlaneC[2] == boardLeftPlaneD[0] && boardBackPlaneC[2] == boardTopPlaneE[0] &&
boardLeftPlaneD[0] == boardTopPlaneE[0];
boardBackPlaneC[8] == boardLeftPlaneD[6] && boardBackPlaneC[8] == boardDownPlaneF[6] &&
boardLeftPlaneD[6] == boardDownPlaneF[6];
//Side Relations
boardCenterPlaneA[1] == boardTopPlaneE[7];
boardCenterPlaneA[3] == boardLeftPlaneD[5];
boardCenterPlaneA[5] == boardRightPlaneB[3];
boardCenterPlaneA[7] == boardDownPlaneF[1];
boardRightPlaneB[1] == boardTopPlaneE[5];
boardRightPlaneB[5] == boardBackPlaneC[3];
boardRightPlaneB[7] == boardDownPlaneF[5];
boardBackPlaneC[1] == boardTopPlaneE[1];
boardBackPlaneC[5] == boardLeftPlaneD[3]
boardBackPlaneC[7] == boardDownPlaneF[7];
boardLeftPlaneD[1] == boardTopPlaneE[3];
boardLeftPlaneD[7] == boardDownPlaneF[3];
//Centers - No Relations
boardCenterPlaneA[4];
boardRightPlaneB[4];
boardBackPlaneC[4];
boardLeftPlaneD[4];
boardTopPlaneE[4];
boardDownPlaneF[4];

}); //END OF PAGE FUNCTION



//NOTES

//GRID




//  If Sum of Cells in single board === 3 X wins ||
//   If Sum of Cells in single board === -3 0 wins

//boardCenterPlaneA[0] boardCenterPlaneA[1] boardCenterPlaneA[2]
//boardCenterPlaneA[3] boardCenterPlaneA[4] boardCenterPlaneA[5]
//boardCenterPlaneA[6] boardCenterPlaneA[7] boardCenterPlaneA[8]

//boardRightPlaneB[0] boardRightPlaneB[1] boardRightPlaneB[2]
//boardRightPlaneB[3] boardRightPlaneB[4] boardRightPlaneB[5]
//boardRightPlaneB[6] boardRightPlaneB[7] boardRightPlaneB[8]

//boardBackPlaneC[0] boardBackPlaneC[1] boardBackPlaneC[2]
//boardBackPlaneC[3] boardBackPlaneC[4] boardBackPlaneC[5]
//boardBackPlaneC[6] boardBackPlaneC[7] boardBackPlaneC[8]

//boardLeftPlaneD[0] boardLeftPlaneD[1] boardLeftPlaneD[2]
//boardLeftPlaneD[3] boardLeftPlaneD[4] boardLeftPlaneD[5]
//boardLeftPlaneD[6] boardLeftPlaneD[7] boardLeftPlaneD[8]

//boardTopPlaneE[0] boardTopPlaneE[1] boardTopPlaneE[2]
//boardTopPlaneE[3] boardTopPlaneE[4] boardTopPlaneE[5]
//boardTopPlaneE[6] boardTopPlaneE[7] boardTopPlaneE[8]

//boardDownPlaneF[0] boardDownPlaneF[1] boardDownPlaneF[2]
//boardDownPlaneF[3] boardDownPlaneF[4] boardDownPlaneF[5]
//boardDownPlaneF[6] boardDownPlaneF[7] boardDownPlaneF[8]

var render = function() {
  corner();
  gameWon();
}
