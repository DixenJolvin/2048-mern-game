import { useState, useEffect, useCallback } from "react";
import {
  initializeGame,
  addNewTile,
  moveTiles,
  canMove,
  hasWon,
} from "./utils/gameLogic";

import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";
import Instructions from "./components/Instructions";

function App() {
  const [boardSize, setBoardSize] = useState(4);
  const [board, setBoard] = useState(() => initializeGame(4));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const handleMove = useCallback(
    (direction) => {
      const { newBoard, score: moveScore, moved } = moveTiles(board, direction);
      if (!moved) return;
      addNewTile(newBoard);
      setBoard(newBoard);
      setScore((prev) => prev + moveScore);
      if (hasWon(newBoard)) setWon(true);
      else if (!canMove(newBoard)) setGameOver(true);
    },
    [board]
  );

  const handleRestart = (size = boardSize) => {
    setBoardSize(size);
    setBoard(initializeGame(size));
    setScore(0);
    setGameOver(false);
    setWon(false);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.includes("Arrow"))
        handleMove(e.key.replace("Arrow", "").toLowerCase());
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleMove]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-2 overflow-hidden">
      <div className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-xl flex flex-col items-center">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-2">2048</h1>

        {/* Score */}
        <ScoreBoard score={score} />

        {/* Board Size Dropdown & Restart */}
        <div className="flex items-center gap-2 mb-2 text-sm">
          <label htmlFor="size" className="font-medium">
            Board Size:
          </label>
          <select
            id="size"
            value={boardSize}
            onChange={(e) => handleRestart(Number(e.target.value))}
            className="border rounded-lg px-2 py-1 text-sm"
          >
            <option value={4}>4×4</option>
            <option value={5}>5×5</option>
            <option value={6}>6×6</option>
          </select>
          <button
            onClick={() => handleRestart(boardSize)}
            className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 text-sm"
          >
            Restart
          </button>
        </div>

        {/* Board */}
        <Board board={board} tileSize="sm" />

        {/* Controls */}
        <Controls handleMove={handleMove} handleRestart={() => handleRestart(boardSize)} small={true} />

        {/* Instructions */}
        <Instructions small={true} />

        {/* Game Status */}
        {won && (
          <div className="text-green-600 font-bold mt-2 text-center text-sm">
            🎉 You Win! 🎉
          </div>
        )}
        {gameOver && !won && (
          <div className="text-red-600 font-bold mt-2 text-center text-sm">
            Game Over 😢
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
