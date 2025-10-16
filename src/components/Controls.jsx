const Controls = ({ handleMove, handleRestart, showSettings, setShowSettings }) => (
  <div className="flex flex-wrap justify-center gap-2 mt-3 w-full">
    <button
      onClick={() => handleMove("up")}
      className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700"
    >
      ↑
    </button>
    <button
      onClick={() => handleMove("left")}
      className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700"
    >
      ←
    </button>
    <button
      onClick={() => handleMove("down")}
      className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700"
    >
      ↓
    </button>
    <button
      onClick={() => handleMove("right")}
      className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700"
    >
      →
    </button>


  </div>
);

export default Controls;
