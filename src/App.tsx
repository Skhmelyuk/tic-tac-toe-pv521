import { useEffect } from "react";
import { Cell } from "./components/Cell";
import { Status } from "./components/Status";
import { TitleGame } from "./components/TitleGame";
import { useTheme } from "./context/ThemeContext";
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

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={`game ${theme === "dark" ? "dark" : ""}`}>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "Темна тема 🌙" : "Світла тема ☀️"}
      </button>
      <TitleGame title="Гра хрести нулики" />
      <Status player={currentPlayer} winner={winner} isDraw={isDraw} />
      <div className="timer"> Час гри: {formatTime(seconds)}</div>
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
