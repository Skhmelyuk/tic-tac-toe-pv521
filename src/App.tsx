import { Cell } from "./components/Cell";
import { Status } from "./components/Status";
import { TitleGame } from "./components/TitleGame";
import useGame from "./hooks/useGame";
import { useState } from "react";

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

  const [isResetHovered, setIsResetHovered] = useState(false);

  const gameStyle: React.CSSProperties = {
    textAlign: "center",
  };

  const timerStyle: React.CSSProperties = {
    marginBottom: "15px",
    fontSize: "1.2rem",
    color: "#2c3e50",
    fontWeight: 500,
  };

  const boardStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    width: "300px",
    margin: "0 auto",
  };

  const resetStyle: React.CSSProperties = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: isResetHovered ? "#0056b3" : "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={gameStyle} id="game">
      <TitleGame title="Гра хрести нулики" age={20} />
      <Status player={currentPlayer} winner={winner} isDraw={isDraw} />
      <div style={timerStyle}> Час гри: {formatTime(seconds)}</div>
      <div style={boardStyle}>
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
        style={resetStyle}
        onClick={handleReset}
        onMouseEnter={() => setIsResetHovered(true)}
        onMouseLeave={() => setIsResetHovered(false)}
      >
        Скинути гру
      </button>
    </div>
  );
}

export default App;

