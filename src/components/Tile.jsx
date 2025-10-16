// Tile.jsx
const getTileColor = (value) => {
  switch (value) {
    case 2: return "bg-yellow-100 text-gray-700";
    case 4: return "bg-yellow-200 text-gray-700";
    case 8: return "bg-orange-400 text-white";
    case 16: return "bg-orange-500 text-white";
    case 32: return "bg-orange-600 text-white";
    case 64: return "bg-orange-700 text-white";
    case 128: return "bg-yellow-400 text-white";
    case 256: return "bg-yellow-500 text-white";
    case 512: return "bg-yellow-600 text-white";
    case 1024: return "bg-yellow-700 text-white";
    case 2048: return "bg-green-500 text-white";
    default: return "bg-gray-200 text-gray-400";
  }
};

const Tile = ({ value }) => (
  <div
    className={`flex items-center justify-center font-bold 
      text-xs sm:text-sm md:text-base 
      rounded-md aspect-square 
      w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 
      ${getTileColor(value)}`}
  >
    {value !== 0 ? value : ""}
  </div>
);

export default Tile;
