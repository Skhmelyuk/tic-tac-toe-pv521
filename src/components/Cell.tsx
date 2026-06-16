import type { CellValue } from "../types";

interface CellProps {
  value: CellValue;
  onCellClick: () => void;
  isWinner: boolean;
}

export function Cell({ value, onCellClick, isWinner }: CellProps) {
  let cellClass = "game__cell";
  if (value === "X") {
    cellClass += " game__cell--x";
  } else if (value === "O") {
    cellClass += " game__cell--o";
  }
  if (isWinner) {
    cellClass += " game__cell--winner";
  }

  return (
    <div className={cellClass} onClick={onCellClick}>
      {value}
    </div>
  );
}

