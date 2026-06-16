import { Cell } from "./components/Cell/Cell";
import { Status } from "./components/Status/Status";
import { TitleGame } from "./components/TitleGame/TitleGame";
import useGame from "./hooks/useGame";
import styles from "./App.module.css";

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
    <div className={styles.game} id="game">
      <TitleGame title="Гра хрести нулики" age={20} />
      <Status player={currentPlayer} winner={winner} isDraw={isDraw} />
      <div className={styles.timer}> Час гри: {formatTime(seconds)}</div>
      <div className={styles.board}>
        {cells.map((cell, index) => (
          <Cell
            value={cell}
            key={index}
            onCellClick={() => handleCellClick(index)}
            isWinner={winnerCombination.includes(index)}
          />
        ))}
      </div>
      <button className={styles.reset} onClick={handleReset}>
        Скинути гру
      </button>
    </div>
  );
}

export default App;

