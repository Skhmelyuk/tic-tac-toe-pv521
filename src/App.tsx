import { Cell } from "./components/Cell";
import { Status } from "./components/Status";
import { TitleGame } from "./components/TitleGame";
import type { BoardState, Player } from "./types";


function App() {
  const cells: BoardState = [null, "X", null, null, null, null, "O", "O", null];
  const currentPlayer: Player  = "X";

  return (
    <div className="game" id="game">
      <TitleGame title="Гра хрести нулики" />
      <Status player={currentPlayer} />
      <div className="board">
        {cells.map((cell, index) => (
          <Cell value={cell} key={index}/>
        ))}
      </div>
      <button className="reset">Скинути гру</button>
    </div>
  );
}

export default App;
