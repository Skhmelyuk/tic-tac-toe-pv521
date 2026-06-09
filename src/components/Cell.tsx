import type { CellValue } from "../types";

interface CellProps{
    value: CellValue
}

export function Cell({value}: CellProps){
    return (
    <div className="cell">
        {value}
    </div>
    );
}