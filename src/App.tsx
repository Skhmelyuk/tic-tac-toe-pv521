import { Cell } from "./components/Cell";
import { Status } from "./components/Status";
import { TitleGame } from "./components/TitleGame";
import useGame from "./hooks/useGame";

const formatTime = (timeInSeconds: number): string => {
  const mins = Math.floor(timeInSeconds / 60);
  const secs = timeInSeconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

function App() {
  const {
    cells,
    currentPlayer,
    winner,
    winnerCombination,
    isDraw,
    handleCellClick,
    handleReset,
    seconds,
  } = useGame();

  return (
    <div 
      className="flex flex-col items-center justify-center p-6 sm:p-8 w-full max-w-md bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-3xl shadow-xl border border-slate-200/50 dark:border-zinc-800/50 transition-all duration-300"
      id="game"
    >
      <TitleGame title="Гра хрести нулики" age={20} />
      
      <Status player={currentPlayer} winner={winner} isDraw={isDraw} />
      
      <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-zinc-400 mb-6 bg-slate-100/80 dark:bg-zinc-800/60 px-4 py-1.5 rounded-full border border-slate-200/50 dark:border-zinc-700/40 shadow-xs">
        <span>⏱️</span> Час гри: {formatTime(seconds)}
      </div>

      <div className="grid grid-cols-3 gap-3 w-72 h-72 sm:w-80 sm:h-80 mb-8">
        {cells.map((cell, index) => (
          <Cell
            value={cell}
            key={index}
            onCellClick={() => handleCellClick(index)}
            isWinner={winnerCombination.includes(index)}
          />
        ))}
      </div>

      <button 
        className="w-full py-3 px-8 text-base font-bold text-white tracking-wide bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-750 hover:to-violet-750 active:scale-98 rounded-2xl shadow-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 focus:outline-none"
        onClick={handleReset}
      >
        Скинути гру
      </button>
    </div>
  );
}

export default App;
