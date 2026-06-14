import { Cell } from "./components/Cell";
import { Status } from "./components/Status";
import { TitleGame } from "./components/TitleGame";
import useGame from "./hooks/useGame";

function App() {
  const {
    cells,
    currentPlayer,
    winner,
    winnerCombination,
    isDraw,
    handleCellClick,
    handleReset,
  } = useGame();

  return (
    <div className="game" id="game">
      <TitleGame title="Гра хрести нулики" age={20} />
      <Status player={currentPlayer} winner={winner} isDraw={isDraw} />
      <div className="board">
        {cells.map((cell, index) => (
          <Cell
            value={cell}
            key={index}
            onCellClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button className="reset" onClick={handleReset}>
        Скинути гру
      </button>
    </div>
  );
}

export default App;
