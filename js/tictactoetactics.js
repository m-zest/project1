

var won = false;
var currentPlayer = "X";

var bS = {a: '', b: '', c: '', d: '', e: '', f: '',
          g: '', h: '', i: '', j: '', k: '', l: '',
          m: '', n: '', o: '', p: '', q: '', r: '',
          s: '', t: '', u: '', v: '', w: '', x: '',
          y: '', z: '',
        }

//var cube = [boardCenterPlaneA, boardRightPlaneB, boardBackPlaneC,
            //boardLeftPlaneD, boardTopPlaneE, boardDownPlaneF]

var startGame = function() {
  won = false;
  currentPlayer = "X";
  boardCenterPlaneA = [
  bS.a, bS.b, bS.c,// A, B, C Center Side/Plane
  bS.d, bS.e, bS.f,// D, E ,F
  bS.g, bS.h, bS.i // G, H, I
  ];

 boardRightPlaneB = [
  bS.c, bS.j, bS.k, // C, J, K Right Side/Plane
  bS.f, bS.l, bS.m, // F, L ,M
  bS.i, bS.n, bS.o // I, N, O
  ];

  boardBackPlaneC = [
  bS.u, bS.t, bS.o, // U, T, O Back Rear Side/Plane
  bS.s, bS.r, bS.m, // S, R ,M
  bS.q, bS.p, bS.k //  Q, P, K
  ];

  boardLeftPlaneD = [
  bS.q, bS.v, bS.a, // Q, V, A Left Side/Plane
  bS.s, bS.w, bS.d, // S, W ,D
  bS.u, bS.x, bS.g // U, X, G
  ];

  boardTopPlaneE = [
  bS.q, bS.p, bS.k, // Q, P, K Up Top Side/Plane
  bS.v, bS.z, bS.j, // V, Z ,J
  bS.a, bS.b, bS.c // A, B, C
  ];

  boardDownPlaneF = [
  bS.g, bS.h, bS.i, // G, H, I Down Bottom Side/Plane
  bS.x, bS.y, bS.n, // X, Y ,N
  bS.u, bS.t, bS.o // U, T, O
  ];
};

// Move
var move = function(cellIndex) {
  if (gameWon()) {
    won = true;
    return;
  } else {
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  }
};

//Click
$('#board').delegate('td', 'click', function() {
  var findKeyName = $(this).attr('id').slice(-1);
  if(bS[findKeyName] === '' && !won) {
    bS[findKeyName] = currentPlayer;
    refreshBoard();
    move();
    playJumpSound();
    render();
  } else { $("#turn").text("try again");
            playErrorSound();
            };
});

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


var render = function() {
  var $turnEl = $("#turn")
  $turnEl.text(currentPlayer);

var $winnerEl = $("#winner");
  renderboard();
  if (!won) {
    $winnerEl.text("X vs O");
  } else {
    $winnerEl.text(currentPlayer + " wins");
    playWinSound();
  }
};


function refreshBoard() {
  boardCenterPlaneA = [ bS.a, bS.b, bS.c, bS.d, bS.e, bS.f, bS.g, bS.h, bS.i
                      ];
   boardRightPlaneB = [ bS.c, bS.j, bS.k, bS.f, bS.l, bS.m, bS.i, bS.n, bS.o
                      ];
    boardBackPlaneC = [ bS.u, bS.t, bS.o, bS.s, bS.r, bS.m, bS.q, bS.p, bS.k
                      ];
    boardLeftPlaneD = [ bS.q, bS.v, bS.a, bS.s, bS.w, bS.d, bS.u, bS.x, bS.g
                      ];
     boardTopPlaneE = [ bS.q, bS.p, bS.k, bS.v, bS.z, bS.j, bS.a, bS.b, bS.c
                      ];
    boardDownPlaneF = [bS.g, bS.h, bS.i, bS.x, bS.y, bS.n, bS.u, bS.t, bS.o
                      ];
    console.log(boardCenterPlaneA, boardRightPlaneB, boardBackPlaneC,
                boardLeftPlaneD, boardTopPlaneE, boardDownPlaneF)
    renderboard();
}

var renderboard = function() {
  $("#cellA0a").text(boardCenterPlaneA[0]);
  $("#cellA1b").text(boardCenterPlaneA[1]);
  $("#cellA2c").text(boardCenterPlaneA[2]);
  $("#cellA3d").text(boardCenterPlaneA[3]);
  $("#cellA4e").text(boardCenterPlaneA[4]);
  $("#cellA5f").text(boardCenterPlaneA[5]);
  $("#cellA6g").text(boardCenterPlaneA[6]);
  $("#cellA7h").text(boardCenterPlaneA[7]);
  $("#cellA8i").text(boardCenterPlaneA[8]);

  $("#cellB0c").text(boardRightPlaneB[0]);
  $("#cellB1j").text(boardRightPlaneB[1]);
  $("#cellB2k").text(boardRightPlaneB[2]);
  $("#cellB3f").text(boardRightPlaneB[3]);
  $("#cellB4l").text(boardRightPlaneB[4]);
  $("#cellB5m").text(boardRightPlaneB[5]);
  $("#cellB6i").text(boardRightPlaneB[6]);
  $("#cellB7n").text(boardRightPlaneB[7]);
  $("#cellB8o").text(boardRightPlaneB[8]);

  $("#cellC0u").text(boardBackPlaneC[0]);
  $("#cellC1t").text(boardBackPlaneC[1]);
  $("#cellC2o").text(boardBackPlaneC[2]);
  $("#cellC3s").text(boardBackPlaneC[3]);
  $("#cellC4r").text(boardBackPlaneC[4]);
  $("#cellC5m").text(boardBackPlaneC[5]);
  $("#cellC6q").text(boardBackPlaneC[6]);
  $("#cellC7p").text(boardBackPlaneC[7]);
  $("#cellC8k").text(boardBackPlaneC[8]);

  $("#cellD0q").text(boardLeftPlaneD[0]);
  $("#cellD1v").text(boardLeftPlaneD[1]);
  $("#cellD2a").text(boardLeftPlaneD[2]);
  $("#cellD3s").text(boardLeftPlaneD[3]);
  $("#cellD4w").text(boardLeftPlaneD[4]);
  $("#cellD5d").text(boardLeftPlaneD[5]);
  $("#cellD6u").text(boardLeftPlaneD[6]);
  $("#cellD7x").text(boardLeftPlaneD[7]);
  $("#cellD8g").text(boardLeftPlaneD[8]);

  $("#cellE0q").text(boardTopPlaneE[0]);
  $("#cellE1p").text(boardTopPlaneE[1]);
  $("#cellE2k").text(boardTopPlaneE[2]);
  $("#cellE3v").text(boardTopPlaneE[3]);
  $("#cellE4z").text(boardTopPlaneE[4]);
  $("#cellE5j").text(boardTopPlaneE[5]);
  $("#cellE6a").text(boardTopPlaneE[6]);
  $("#cellE7b").text(boardTopPlaneE[7]);
  $("#cellE8c").text(boardTopPlaneE[8]);

  $("#cellF0g").text(boardDownPlaneF[0]);
  $("#cellF1h").text(boardDownPlaneF[1]);
  $("#cellF2i").text(boardDownPlaneF[2]);
  $("#cellF3x").text(boardDownPlaneF[3]);
  $("#cellF4y").text(boardDownPlaneF[4]);
  $("#cellF5n").text(boardDownPlaneF[5]);
  $("#cellF6u").text(boardDownPlaneF[6]);
  $("#cellF7t").text(boardDownPlaneF[7]);
  $("#cellF8o").text(boardDownPlaneF[8]);
}

/* USER INTERACTION */

$("#restartButton").click(function(evt) {
  // startGame();
  // renderboard();
  location.reload(true);
});


$("#redButton").click(function() {
  $("#boardTopPlaneE").css("display", "table");
  $("#boardDownPlaneF").css("display", "none");
  $("#boardLeftPlaneD").css("display", "none");
  $("#boardBackPlaneC").css("display", "none");
  $("#boardRightPlaneB").css("display", "none");
  $("#boardCenterPlaneA").css("display", "none");


});

$("#greenButton").click(function() {
  $("#boardTopPlaneE").css("display", "none");
  $("#boardDownPlaneF").css("display", "none");
  $("#boardLeftPlaneD").css("display", "none");
  $("#boardBackPlaneC").css("display", "none");
  $("#boardRightPlaneB").css("display", "table");
  $("#boardCenterPlaneA").css("display", "none");
});

$("#yellowButton").click(function() {
  $("#boardTopPlaneE").css("display", "none");
  $("#boardDownPlaneF").css("display", "table");
  $("#boardLeftPlaneD").css("display", "none");
  $("#boardBackPlaneC").css("display", "none");
  $("#boardRightPlaneB").css("display", "none");
  $("#boardCenterPlaneA").css("display", "none");
});

$("#orangeButton").click(function() {
  $("#boardTopPlaneE").css("display", "none");
  $("#boardDownPlaneF").css("display", "none");
  $("#boardLeftPlaneD").css("display", "none");
  $("#boardBackPlaneC").css("display", "none");
  $("#boardRightPlaneB").css("display", "none");
  $("#boardCenterPlaneA").css("display", "table");
});

$("#blueButton").click(function() {
  $("#boardTopPlaneE").css("display", "none");
  $("#boardDownPlaneF").css("display", "none");
  $("#boardLeftPlaneD").css("display", "table");
  $("#boardBackPlaneC").css("display", "none");
  $("#boardRightPlaneB").css("display", "none");
  $("#boardCenterPlaneA").css("display", "none");
});

$("#purpleButton").click(function() {
  $("#boardTopPlaneE").css("display", "none");
  $("#boardDownPlaneF").css("display", "none");
  $("#boardLeftPlaneD").css("display", "none");
  $("#boardBackPlaneC").css("display", "table");
  $("#boardRightPlaneB").css("display", "none");
  $("#boardCenterPlaneA").css("display", "none");
});



/////audio manipulation
///////////////////

var jump = $("#jump")[0];
function playJumpSound() {
  jump.play();
}

var error = $("#error")[0];
function playErrorSound() {
    error.play();
}

var win
= $("#win")[0];
function playWinSound() {
    win.play();
}


