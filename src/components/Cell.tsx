import type { CellValue } from "../types";

interface CellProps {
  value: CellValue;
  onCellClick: () => void;
  isWinner: boolean;
}

export function Cell({ value, onCellClick, isWinner }: CellProps) {
  const baseClass = "aspect-square w-full bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-4xl font-extrabold shadow-sm border border-slate-200/80 dark:border-zinc-700/80 cursor-pointer select-none transition-all duration-300 transform active:scale-95";
  
  const hoverClass = value ? "" : "hover:bg-slate-50 dark:hover:bg-zinc-700/50 hover:shadow-md hover:-translate-y-0.5";
  
  const winnerClass = isWinner
    ? "bg-gradient-to-br from-emerald-500 to-teal-600 border-emerald-500 dark:border-emerald-600 shadow-lg shadow-emerald-500/20 dark:shadow-none animate-pulse scale-[1.03]"
    : "";
    
  const markerClass = isWinner
    ? "text-white"
    : value === "X"
    ? "text-rose-500"
    : value === "O"
    ? "text-blue-500"
    : "";
    
  const cellClass = `${baseClass} ${hoverClass} ${winnerClass} ${markerClass}`;

  return (
    <button className={cellClass} onClick={onCellClick} type="button">
      {value}
    </button>
  );
}
