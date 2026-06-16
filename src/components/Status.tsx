import type { CellValue, Player } from "../types";

interface StatusProps {
  player: Player;
  winner: CellValue;
  isDraw: boolean;
}

export function Status({ player, winner, isDraw }: StatusProps) {
  const statusCapsuleClass = "inline-flex items-center justify-center bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800/80 rounded-full px-5 py-2 text-base font-semibold text-slate-700 dark:text-zinc-300 shadow-sm transition-all duration-300 mb-6";
  
  if (winner) {
    return (
      <div className={statusCapsuleClass}>
        Гравець
        <span className={winner === "X" ? "text-rose-500 font-extrabold mx-1.5" : "text-blue-500 font-extrabold mx-1.5"}>
          {winner}
        </span>
        переміг!
      </div>
    );
  }

  if (isDraw) {
    return (
      <div className={statusCapsuleClass}>
        Нічия!
      </div>
    );
  }

  return (
    <div className={statusCapsuleClass}>
      Хід гравця
      <span className={player === "X" ? "text-rose-500 font-extrabold mx-1.5" : "text-blue-500 font-extrabold mx-1.5"}>
        {player}
      </span>
    </div>
  );
}
