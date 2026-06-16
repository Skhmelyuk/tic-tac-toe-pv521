import { useState } from "react";
import type { CellValue } from "../types";

interface CellProps {
  value: CellValue;
  onCellClick: () => void;
  isWinner: boolean;
}

export function Cell({ value, onCellClick, isWinner }: CellProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    background: "white",
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
  };

  const xMarkStyle: React.CSSProperties = {
    color: "#e74c3c",
    textShadow: "2px 2px 4px rgba(231, 76, 60, 0.2)",
  };

  const oMarkStyle: React.CSSProperties = {
    color: "#3498db",
    textShadow: "2px 2px 4px rgba(52, 152, 219, 0.2)",
  };

  const winnerStyle: React.CSSProperties = {
    background: "linear-gradient(45deg, #2ecc71, #27ae60)",
    color: "white",
    border: "2px solid #27ae60",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  };

  // Combine styles
  let currentStyle = { ...baseStyle };

  if (value === "X") {
    currentStyle = { ...currentStyle, ...xMarkStyle };
  } else if (value === "O") {
    currentStyle = { ...currentStyle, ...oMarkStyle };
  }

  if (isWinner) {
    currentStyle = { ...currentStyle, ...winnerStyle };
    if (isHovered) {
      currentStyle.background = "linear-gradient(45deg, #27ae60, #2ecc71)";
    }
  } else {
    if (isHovered) {
      currentStyle.backgroundColor = "#f8f9fa";
      currentStyle.transform = "scale(1.05)";
    }
  }

  return (
    <div
      style={currentStyle}
      onClick={onCellClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {value}
    </div>
  );
}

