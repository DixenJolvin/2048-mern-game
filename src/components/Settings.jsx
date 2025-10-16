const Settings = ({ boardSize, handleRestart }) => (
  <div className="flex items-center gap-2 mt-2 text-sm w-full justify-center">
    <label htmlFor="size" className="font-medium">
      Board Size:
    </label>
    <select
      id="size"
      value={boardSize}
      onChange={(e) => handleRestart(Number(e.target.value))}
      className="border rounded-lg px-2 py-1"
    >
      <option value={4}>4×4</option>
      <option value={5}>5×5</option>
      <option value={6}>6×6</option>
    </select>
  </div>
);

export default Settings;
