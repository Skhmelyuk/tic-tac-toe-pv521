import type { CellValue } from "../types";

interface CellProps{
    value: CellValue,
    onCellClick: () => void
}

export function Cell({value,onCellClick}: CellProps){
    return (
    <div className="cell" onClick={onCellClick}>
        {value}
    </div>
    );
}