import Button from "react-bootstrap/Button";
import type { CellValue } from "../types";

interface CellProps {
  value: CellValue;
  onCellClick: () => void;
  isWinner: boolean;
}

export function Cell({ value, onCellClick, isWinner }: CellProps) {
  const variant = isWinner ? "success" : "light";
  const textColor = value === "X" ? "text-danger" : value === "O" ? "text-primary" : "";

  return (
    <Button
      variant={variant}
      onClick={onCellClick}
      className={`d-flex align-items-center justify-content-center border border-secondary fw-bold ${textColor}`}
      style={{
        width: "100px",
        height: "100px",
        fontSize: "2.5rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      {value}
    </Button>
  );
}

