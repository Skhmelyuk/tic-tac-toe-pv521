import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
    <Box sx={{ textAlign: "center", py: 5 }} id="game">
      <TitleGame title="Гра хрести нулики" age={20} />
      <Status player={currentPlayer} winner={winner} isDraw={isDraw} />
      <Typography variant="body1" sx={{ marginBottom: "15px", fontSize: "1.2rem", color: "#2c3e50", fontWeight: 500 }}>
        Час гри: {formatTime(seconds)}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          width: "300px",
          margin: "0 auto",
        }}
      >
        {cells.map((cell, index) => (
          <Cell
            value={cell}
            key={index}
            onCellClick={() => handleCellClick(index)}
            isWinner={winnerCombination.includes(index)}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        onClick={handleReset}
        sx={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        }}
      >
        Скинути гру
      </Button>
    </Box>
  );
}

export default App;

