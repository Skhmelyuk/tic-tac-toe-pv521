import styles from "./Status.module.css";
import type { CellValue, Player } from "../../types";

interface StatusProps {
  player: Player;
  winner: CellValue;
  isDraw: boolean;
}

export function Status({ player, winner, isDraw }: StatusProps) {
  const getMarkClass = (mark: CellValue) => {
    return mark === "X" ? styles.xMark : styles.oMark;
  };

  if (winner) {
    return (
      <div className={styles.turn}>
        Гравець{" "}
        <span className={getMarkClass(winner)}>{winner}</span>{" "}
        переміг!
      </div>
    );
  }

  if (isDraw) {
    return <div className={styles.turn}>Нічия!</div>;
  }

  return (
    <div className={styles.turn}>
      Хід гравця{" "}
      <span className={getMarkClass(player)}>{player}</span>
    </div>
  );
}

