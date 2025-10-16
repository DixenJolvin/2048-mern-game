// Board.jsx
import Tile from "./Tile";

const Board = ({ board }) => {
  const size = board.length;
  return (
    <div
      className="bg-gray-300 p-1 sm:p-2 rounded-md grid gap-1 sm:gap-2 w-full max-w-xs sm:max-w-sm md:max-w-md"
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
    >
      {board.flat().map((value, index) => (
        <Tile key={index} value={value} />
      ))}
    </div>
  );
};

export default Board;
