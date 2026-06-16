import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";
import type { CellValue } from "../types";

interface CellProps {
  value: CellValue;
  onCellClick: () => void;
  isWinner: boolean;
}

const winPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(46, 204, 113, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
  }
`;

export function Cell({ value, onCellClick, isWinner }: CellProps) {
  const markColor = isWinner 
    ? "#ffffff" 
    : value === "X" 
      ? "#e74c3c" 
      : value === "O" 
        ? "#3498db" 
        : "inherit";

  const markShadow = isWinner
    ? "1px 1px 2px rgba(0, 0, 0, 0.2)"
    : value === "X"
      ? "2px 2px 4px rgba(231, 76, 60, 0.2)"
      : value === "O"
        ? "2px 2px 4px rgba(52, 152, 219, 0.2)"
        : "none";

  return (
    <Box
      onClick={onCellClick}
      sx={{
        background: isWinner ? "linear-gradient(45deg, #2ecc71, #27ae60)" : "white",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        aspectRatio: "1",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2.5rem",
        fontWeight: "bold",
        userSelect: "none",
        color: markColor,
        textShadow: markShadow,
        border: isWinner ? "2px solid #27ae60" : "none",
        transform: isWinner ? "scale(1.05)" : "none",
        animation: isWinner ? `${winPulse} 1.5s ease-in-out infinite` : "none",

        "&:hover": {
          backgroundColor: isWinner ? "none" : "#f8f9fa",
          transform: "scale(1.05)",
          background: isWinner ? "linear-gradient(45deg, #27ae60, #2ecc71)" : "inherit",
        },
      }}
    >
      {value}
    </Box>
  );
}

