import type { CellValue, Player } from "../types";

interface StatusProps {
  player: Player;
  winner: CellValue;
  isDraw: boolean;
}

export function Status({ player, winner, isDraw }: StatusProps) {
  const getMarkClass = (mark: CellValue) => {
    return mark === "X" ? "game__status-mark--x" : "game__status-mark--o";
  };

  if (winner) {
    return (
      <div className="game__status">
        Гравець{" "}
        <span className={getMarkClass(winner)}>{winner}</span>{" "}
        переміг!
      </div>
    );
  }

  if (isDraw) {
    return <div className="game__status">Нічия!</div>;
  }

  return (
    <div className="game__status">
      Хід гравця{" "}
      <span className={getMarkClass(player)}>{player}</span>
    </div>
  );
}

