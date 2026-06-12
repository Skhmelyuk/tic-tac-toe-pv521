import { useState } from "react";
import { Cell } from "./components/Cell";
import { Status } from "./components/Status";
import { TitleGame } from "./components/TitleGame";
import type { BoardState, Player, WinResult } from "./types";

const WINNING_COMBINATIONS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Рядки (горизонтальні лінії)
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Стовпці (вертикальні лінії)
  [0, 4, 8],
  [2, 4, 6], // Діагоналі
]

function checkWinner(currentBoard: BoardState): WinResult | null {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      currentBoard[a] &&
      currentBoard[a] === currentBoard[b] &&
      currentBoard[a] === currentBoard[c]
    ) {
      return {
        winner: currentBoard[a] as Player,
        combination,
      };
    }
  }
  return null;
}

function App() {
  const [cells, setCells] = useState<BoardState>([null, "X", null, null, null, null, "O", "O", null]);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  
  const winnerResult = checkWinner(cells);
  const winner = winnerResult ? winnerResult.winner : null;
  const winnerCombination = winnerResult ? winnerResult.combination : [];
  const isDraw = !winner && cells.every( (cell)=>cell!=null );
  
  const handleSendClick = (index:number):void => {

    if (cells[index] || winner || isDraw){
      return
    }

    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

  }  

  return (
    <div className="game" id="game">
      <TitleGame title="Гра хрести нулики" age={20} />
      <Status player={currentPlayer} />
      <div className="board">
        {cells.map((cell, index) => (

          <Cell value={cell} key={index} onCellClick={() => handleSendClick(index)} />
        ))}
      </div>
      <button className="reset">Скинути гру !!!!!</button>
    </div>
  );
}

export default App;
