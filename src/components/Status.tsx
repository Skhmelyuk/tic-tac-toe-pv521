import type { CellValue, Player } from "../types";

interface StatusProps {
  player: Player;
  winner: CellValue;
  isDraw: boolean;
}

export function Status({ player, winner, isDraw }: StatusProps) {
  if (winner) {
    return (
      <div 
        className="d-inline-block text-center mb-4 px-4 py-2 bg-white rounded-pill shadow-sm border fw-semibold"
        style={{ fontSize: "1.4rem", color: "#34495e", transition: "transform 0.3s ease" }}
      >
        Гравець{" "}
        <span className={winner === "X" ? "text-danger fw-bold" : "text-primary fw-bold"}>
          {winner}
        </span>{" "}
        переміг!
      </div>
    );
  }

  if (isDraw) {
    return (
      <div 
        className="d-inline-block text-center mb-4 px-4 py-2 bg-white rounded-pill shadow-sm border fw-semibold"
        style={{ fontSize: "1.4rem", color: "#34495e" }}
      >
        Нічия!
      </div>
    );
  }

  return (
    <div 
      className="d-inline-block text-center mb-4 px-4 py-2 bg-white rounded-pill shadow-sm border fw-semibold"
      style={{ fontSize: "1.4rem", color: "#34495e" }}
    >
      Хід гравця{" "}
      <span className={player === "X" ? "text-danger fw-bold" : "text-primary fw-bold"}>
        {player}
      </span>
    </div>
  );
}

