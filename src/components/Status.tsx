import type { CellValue, Player } from "../types";
import { useContext } from "react";
import { RegisterContext } from "../main";

interface StatusProps {
  player: Player;
  winner: CellValue;
  isDraw: boolean;
}

export function Status({ player, winner, isDraw }: StatusProps) {
  const { user } = useContext(RegisterContext);

  if (winner) {
    return (
      <div className="turn">
        Гравець{" "}
        <span className={winner === "X" ? "x-mark" : "o-mark"}>{winner}</span>{" "}
        переміг!
        <span className="">{user}</span>
      </div>
    );
  }

  if (isDraw) {
    return <div className="turn">Нічия!</div>;
  }

  return (
    <div className="turn">
      Хід гравця{" "}
      <span className={player === "X" ? "x-mark" : "o-mark"}>{player}</span>
    </div>
  );
}
