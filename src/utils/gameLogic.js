export const initializeGame = (size) => {
  const board = Array(size)
    .fill()
    .map(() => Array(size).fill(0));
  addNewTile(board);
  addNewTile(board);
  return board;
};

export const addNewTile = (board) => {
  const empty = [];
  board.forEach((row, i) =>
    row.forEach((val, j) => val === 0 && empty.push([i, j]))
  );
  if (!empty.length) return board;
  const [i, j] = empty[Math.floor(Math.random() * empty.length)];
  board[i][j] = Math.random() < 0.9 ? 2 : 4;
  return board;
};

export const isBoardChanged = (oldBoard, newBoard) =>
  JSON.stringify(oldBoard) !== JSON.stringify(newBoard);

export const canMove = (board) => {
  const size = board.length;
  for (let i = 0; i < size; i++)
    for (let j = 0; j < size; j++)
      if (
        board[i][j] === 0 ||
        (i < size - 1 && board[i][j] === board[i + 1][j]) ||
        (j < size - 1 && board[i][j] === board[i][j + 1])
      )
        return true;
  return false;
};

export const hasWon = (board) => board.flat().includes(2048);

export const moveTiles = (board, direction) => {
  const size = board.length;
  let moved = false;
  let score = 0;

  const moveRow = (row) => {
    let filtered = row.filter((v) => v !== 0);
    for (let i = 0; i < filtered.length - 1; i++) {
      if (filtered[i] === filtered[i + 1]) {
        filtered[i] *= 2;
        score += filtered[i];
        filtered[i + 1] = 0;
      }
    }
    filtered = filtered.filter((v) => v !== 0);
    while (filtered.length < size) filtered.push(0);
    return filtered;
  };

  const newBoard = board.map((r) => [...r]);

  for (let i = 0; i < size; i++) {
    switch (direction) {
      case "left":
        {
          const row = moveRow(newBoard[i]);
          if (JSON.stringify(row) !== JSON.stringify(newBoard[i])) moved = true;
          newBoard[i] = row;
        }
        break;
      case "right":
        {
          const row = moveRow([...newBoard[i]].reverse()).reverse();
          if (JSON.stringify(row) !== JSON.stringify(newBoard[i])) moved = true;
          newBoard[i] = row;
        }
        break;
      case "up":
        {
          const col = newBoard.map((r) => r[i]);
          const newCol = moveRow(col);
          if (JSON.stringify(col) !== JSON.stringify(newCol)) moved = true;
          newCol.forEach((v, idx) => (newBoard[idx][i] = v));
        }
        break;
      case "down":
        {
          const col = newBoard.map((r) => r[i]).reverse();
          const newCol = moveRow(col).reverse();
          if (JSON.stringify(col.reverse()) !== JSON.stringify(newCol)) moved = true;
          newCol.forEach((v, idx) => (newBoard[idx][i] = v));
        }
        break;
    }
  }

  return { newBoard, score, moved };
};
