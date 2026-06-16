import { useState } from "react";
import type { CellValue, Player } from "../types";

interface StatusProps {
  player: Player;
  winner: CellValue;
  isDraw: boolean;
}

export function Status({ player, winner, isDraw }: StatusProps) {
  const [isHovered, setIsHovered] = useState(false);

  const turnStyle: React.CSSProperties = {
    marginBottom: "20px",
    fontSize: "1.4rem",
    color: "#34495e",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderRadius: "30px",
    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
    fontWeight: 500,
    transition: "transform 0.3s ease",
    ...(isHovered && { transform: "translateY(-2px)" }),
  };

  const xMarkStyle: React.CSSProperties = {
    color: "#e74c3c",
    fontWeight: 700,
  };

  const oMarkStyle: React.CSSProperties = {
    color: "#007bff",
    fontWeight: 700,
  };

  const getMarkStyle = (mark: CellValue) => {
    return mark === "X" ? xMarkStyle : oMarkStyle;
  };

  return (
    <div
      style={turnStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {winner ? (
        <>
          Гравець <span style={getMarkStyle(winner)}>{winner}</span> переміг!
        </>
      ) : isDraw ? (
        "Нічия!"
      ) : (
        <>
          Хід гравця <span style={getMarkStyle(player)}>{player}</span>
        </>
      )}
    </div>
  );
}

