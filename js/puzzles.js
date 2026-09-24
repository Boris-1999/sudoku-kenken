// Complete Puzzle Definitions for Round 3 (Pairs 1 to 4)
// Extracted and mathematically verified from Round 3 (1).docx

export const PUZZLES = {
  1: {
    pair: 1,
    kenken: {
      type: 'kenken',
      pair: 1,
      name: 'KenKen Challenge #1',
      size: 4,
      image: 'assets/puzzles/image1.png',
      cages: [
        { id: 'c1', label: '12×', target: 12, op: '×', cells: [[0,0], [1,0], [1,1]] },
        { id: 'c2', label: '4+', target: 4, op: '+', cells: [[0,1], [0,2]] },
        { id: 'c3', label: '4', target: 4, op: '', cells: [[0,3]] },
        { id: 'c4', label: '5+', target: 5, op: '+', cells: [[1,2], [1,3]] },
        { id: 'c5', label: '3-', target: 3, op: '-', cells: [[2,0], [2,1]] },
        { id: 'c6', label: '5+', target: 5, op: '+', cells: [[2,2], [2,3]] },
        { id: 'c7', label: '7+', target: 7, op: '+', cells: [[3,0], [3,1]] },
        { id: 'c8', label: '2÷', target: 2, op: '÷', cells: [[3,2], [3,3]] }
      ],
      solution: [
        [2, 1, 3, 4],
        [3, 2, 4, 1],
        [1, 4, 2, 3],
        [4, 3, 1, 2]
      ]
    },
    sudoku: {
      type: 'sudoku',
      pair: 1,
      name: 'Sudoku Challenge #1',
      size: 6,
      boxRows: 2,
      boxCols: 3,
      image: 'assets/puzzles/image5.png',
      givens: [
        [4, 0, 0, 0, 1, 3],
        [6, 3, 0, 0, 2, 5],
        [0, 6, 4, 3, 5, 0],
        [0, 0, 0, 2, 0, 6],
        [0, 1, 0, 0, 0, 0],
        [5, 4, 6, 0, 3, 0]
      ],
      solution: [
        [4, 2, 5, 6, 1, 3],
        [6, 3, 1, 4, 2, 5],
        [2, 6, 4, 3, 5, 1],
        [1, 5, 3, 2, 4, 6],
        [3, 1, 2, 5, 6, 4],
        [5, 4, 6, 1, 3, 2]
      ]
    }
  },
  2: {
    pair: 2,
    kenken: {
      type: 'kenken',
      pair: 2,
      name: 'KenKen Challenge #2',
      size: 4,
      image: 'assets/puzzles/image2.png',
      cages: [
        { id: 'c1', label: '18×', target: 18, op: '×', cells: [[0,0], [0,1], [1,0], [1,1]] },
        { id: 'c2', label: '1', target: 1, op: '', cells: [[0,2]] },
        { id: 'c3', label: '2÷', target: 2, op: '÷', cells: [[0,3], [1,3]] },
        { id: 'c4', label: '24×', target: 24, op: '×', cells: [[1,2], [2,2], [2,3]] },
        { id: 'c5', label: '8×', target: 8, op: '×', cells: [[2,0], [2,1], [3,0]] },
        { id: 'c6', label: '12×', target: 12, op: '×', cells: [[3,1], [3,2], [3,3]] }
      ],
      solution: [
        [3, 2, 1, 4],
        [1, 3, 4, 2],
        [4, 1, 2, 3],
        [2, 4, 3, 1]
      ]
    },
    sudoku: {
      type: 'sudoku',
      pair: 2,
      name: 'Sudoku Challenge #2',
      size: 6,
      boxRows: 2,
      boxCols: 3,
      image: 'assets/puzzles/image6.png',
      givens: [
        [5, 6, 0, 2, 0, 0],
        [3, 0, 0, 0, 0, 6],
        [1, 0, 0, 5, 0, 2],
        [0, 5, 0, 3, 0, 0],
        [0, 1, 3, 0, 0, 5],
        [4, 0, 0, 6, 0, 1]
      ],
      solution: [
        [5, 6, 1, 2, 4, 3],
        [3, 4, 2, 1, 5, 6],
        [1, 3, 4, 5, 6, 2],
        [2, 5, 6, 3, 1, 4],
        [6, 1, 3, 4, 2, 5],
        [4, 2, 5, 6, 3, 1]
      ]
    }
  },
  3: {
    pair: 3,
    kenken: {
      type: 'kenken',
      pair: 3,
      name: 'KenKen Challenge #3',
      size: 4,
      image: 'assets/puzzles/image3.png',
      cages: [
        { id: 'c1', label: '3+', target: 3, op: '+', cells: [[0,0], [1,0]] },
        { id: 'c2', label: '9+', target: 9, op: '+', cells: [[0,1], [0,2], [0,3]] },
        { id: 'c3', label: '5+', target: 5, op: '+', cells: [[1,2], [1,3]] },
        { id: 'c4', label: '12+', target: 12, op: '+', cells: [[1,1], [2,0], [2,1], [2,2]] },
        { id: 'c5', label: '4+', target: 4, op: '+', cells: [[2,3], [3,3]] },
        { id: 'c6', label: '7+', target: 7, op: '+', cells: [[3,0], [3,1], [3,2]] }
      ],
      solution: [
        [1, 4, 3, 2],
        [2, 3, 1, 4],
        [3, 2, 4, 1],
        [4, 1, 2, 3]
      ]
    },
    sudoku: {
      type: 'sudoku',
      pair: 3,
      name: 'Sudoku Challenge #3',
      size: 6,
      boxRows: 2,
      boxCols: 3,
      image: 'assets/puzzles/image7.png',
      givens: [
        [5, 1, 0, 0, 2, 3],
        [3, 2, 0, 0, 5, 0],
        [6, 5, 3, 0, 1, 4],
        [0, 0, 0, 6, 3, 0],
        [1, 0, 5, 0, 4, 0],
        [0, 3, 0, 5, 0, 1]
      ],
      solution: [
        [5, 1, 6, 4, 2, 3],
        [3, 2, 4, 1, 5, 6],
        [6, 5, 3, 2, 1, 4],
        [2, 4, 1, 6, 3, 5],
        [1, 6, 5, 3, 4, 2],
        [4, 3, 2, 5, 6, 1]
      ]
    }
  },
  4: {
    pair: 4,
    kenken: {
      type: 'kenken',
      pair: 4,
      name: 'KenKen Challenge #4',
      size: 4,
      image: 'assets/puzzles/image4.png',
      cages: [
        { id: 'c1', label: '7+', target: 7, op: '+', cells: [[0,0], [0,1]] },
        { id: 'c2', label: '1-', target: 1, op: '-', cells: [[0,2], [1,2]] },
        { id: 'c3', label: '3+', target: 3, op: '+', cells: [[0,3], [1,3]] },
        { id: 'c4', label: '3-', target: 3, op: '-', cells: [[1,0], [2,0]] },
        { id: 'c5', label: '2÷', target: 2, op: '÷', cells: [[1,1], [2,1]] },
        { id: 'c6', label: '48×', target: 48, op: '×', cells: [[2,2], [2,3], [3,3]] },
        { id: 'c7', label: '6+', target: 6, op: '+', cells: [[3,0], [3,1], [3,2]] }
      ],
      solution: [
        [3, 4, 2, 1],
        [4, 1, 3, 2],
        [1, 2, 4, 3],
        [2, 3, 1, 4]
      ]
    },
    sudoku: {
      type: 'sudoku',
      pair: 4,
      name: 'Sudoku Challenge #4',
      size: 6,
      boxRows: 2,
      boxCols: 3,
      image: 'assets/puzzles/image8.png',
      givens: [
        [5, 0, 6, 4, 0, 3],
        [0, 3, 0, 0, 1, 0],
        [6, 0, 0, 0, 0, 2],
        [3, 0, 0, 0, 0, 4],
        [0, 6, 0, 0, 4, 0],
        [2, 0, 4, 6, 0, 1]
      ],
      solution: [
        [5, 1, 6, 4, 2, 3],
        [4, 3, 2, 5, 1, 6],
        [6, 4, 1, 3, 5, 2],
        [3, 2, 5, 1, 6, 4],
        [1, 6, 3, 2, 4, 5],
        [2, 5, 4, 6, 3, 1]
      ]
    }
  }
};

export const ALL_PUZZLE_KEYS = [
  'kenken-1',
  'kenken-2',
  'kenken-3',
  'kenken-4',
  'sudoku-1',
  'sudoku-2',
  'sudoku-3',
  'sudoku-4'
];

export function getPuzzleByKey(key) {
  if (!key) return null;
  const parts = key.split('-');
  const type = parts[0];
  const pair = parseInt(parts[1], 10);
  return PUZZLES[pair]?.[type] || null;
}

