import React from "react";

const GameStatus = ({ won, gameOver }) => {
  if (!won && !gameOver) return null;

  const statusStyles = won
    ? {
        bg: "bg-green-100",
        border: "border-green-500",
        text: "text-green-700",
        message: "🎉 You Won! 🎉",
      }
    : {
        bg: "bg-red-100",
        border: "border-red-500",
        text: "text-red-700",
        message: "Game Over!",
      };

  return (
    <div
      className={`${statusStyles.bg} border-2 ${statusStyles.border} rounded-lg p-4 mb-4 text-center`}
    >
      <p className={`font-bold text-lg ${statusStyles.text}`}>{statusStyles.message}</p>
    </div>
  );
};

export default GameStatus;
