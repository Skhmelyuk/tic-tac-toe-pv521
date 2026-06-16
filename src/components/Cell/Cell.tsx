import styles from "./Cell.module.css";
import type { CellValue } from "../../types";

interface CellProps {
  value: CellValue;
  onCellClick: () => void;
  isWinner: boolean;
}

export function Cell({ value, onCellClick, isWinner }: CellProps) {
  const cellClass = `
    ${styles.cell} 
    ${value === "X" ? styles.xMark : ""} 
    ${value === "O" ? styles.oMark : ""} 
    ${isWinner ? styles.winner : ""}
  `.trim();

  return (
    <div className={cellClass} onClick={onCellClick}>
      {value}
    </div>
  );
}

