const DRAW_SCORE = 3;
const WIN_SCORE = 6;
const MOVES = {A: 'X', B: 'Y', C: 'Z'};
const SCORES = {X: 1, Y: 2, Z: 3};
const WINS = {Y: 'X', Z: 'Y', X: 'Z'};

function rockPaperScissorsScore(strategy) {
  let rounds = strategy.split('\n');
  let yourScore = 0;
  rounds.forEach(round => {
    let move = round.split(' ');
    move.splice(0, 1, MOVES[move[0]]);
    yourScore += SCORES[move[1]];
    if (WINS[move[1]] === move[0]) { yourScore += WIN_SCORE; }
    else { yourScore += DRAW_SCORE; }
  });
  return yourScore;
}

function secondRockPaperScissorsScore(strategy) {
  const OUTCOMES = {X: 'lose', Y: 'draw', Z: 'win'};
  let rounds = strategy.split('\n');
  let yourScore = 0;
  rounds.forEach(round => {
    let move = round.split(' ');
    move.splice(0, 1, MOVES[move[0]]);
    yourScore += scoreTargetMove(move, OUTCOMES)
  });
  return yourScore;
}

function scoreTargetMove(move, OUTCOMES) {
  let moveScore = 0;
  if (OUTCOMES[move[1]] === 'lose') {
    move.splice(1, 1, WINS[move[0]]);
  }
  else if (OUTCOMES[move[1]] === 'win') {
    let winningMove = Object.keys(WINS)
                            .find((elfMove) => (WINS[elfMove] === move[0]));
    move.splice(1, 1, winningMove);
    moveScore += WIN_SCORE;
  }
  else {
    move.splice(1, 1, move[0]);
    moveScore += DRAW_SCORE;
  }
  moveScore += SCORES[move[1]];
  return moveScore;
}