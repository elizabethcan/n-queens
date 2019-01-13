/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  // input: number representing n rooks and nxn board size
  // output: array of arrays (matrix) each inner array is a row
  // contraints: none
  // edge cases: none
  // strategy:
  // want to place first rook at first possible spot (0,0)
  //togglePiece: function(rowIndex, colIndex)
  var solutionRows = solution.rows();
  // for (var k = 0; k < n; k++) {
  //   solution.togglePiece(0, k);
  solution.togglePiece(0, 0);
    for (var i = 0; i < solutionRows.length; i++) { // iterates over entire board i is currently equal to an entire row
    // we want to place second rook at first available spot.
      // we need to iterate over each element in an entire row
      for (var j = 0; j < solutionRows[i].length; j++) {
        // if current element is 0, toggle to 1
        if (solutionRows[i][j] === 0) {
          solution.togglePiece(i, j);
          //if there is a conflict
          if (solution.hasAnyRooksConflicts()) {
            //toggle back to 0 
            solution.togglePiece(i, j);
          }
        }
      }
    } 
  // }   
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solutionCount = 0; 
  // for (var i = 0; i < n; i++) {
  //   var board = new Board({'n': n});
  //   var boardRows = board.rows();
  //   board.togglePiece(0, i);
  //   for (var j = 0; j < n; j++) {
  //     for (var k = 0; k < n; k++) {
  //       if (boardRows[j][k] === 0) {
  //         board.togglePiece(j, k);
  //         if (board.hasAnyRooksConflicts()) {
  //           board.togglePiece(j, k);
  //         }
  //       }
  //     }
  //   }
  //   solutionCount += 1;
  // }
  
  
  var rookPlacerHelper = function(rookCount, board) {
    if (rookCount === n) {
      solutionCount++;
    } else {
      var row = rookCount;
      for (var i = 0; i < n; i++) {
        board.togglePiece(row, i);
        if (board.hasAnyRooksConflicts()) {
          board.togglePiece(row, i);
          rookPlacerHelper(rookCount, i);
        } else {
          rookCount += 1;
          rookPlacerHelper(rookCount, board);
        }
      }
    }
  };
  
  var solutionCount = 0;
  var board = new Board({n: n});
  var boardRows = board.rows();
  var rookCount = 0;
  rookPlacerHelper(rookCount, board);
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme
//
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
