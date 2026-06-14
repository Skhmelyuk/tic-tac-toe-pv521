import { Cell } from "./components/Cell";
import { Status } from "./components/Status";
import { TitleGame } from "./components/TitleGame";
import useGame from "./hooks/useGame";
import { useState, useEffect } from "react";

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
    <div className="game" id="game">
      <TitleGame title="Гра хрести нулики" age={20} />
      <Status player={currentPlayer} winner={winner} isDraw={isDraw} />
      <div className = "timer"> Час гри: {formatTime(seconds)}</div>
      <div className="board">
        {cells.map((cell, index) => (
          <Cell
            value={cell}
            key={index}
            onCellClick={() => handleCellClick(index)}
            isWinner={winnerCombination.includes(index)}
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
