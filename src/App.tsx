import { Cell } from "./components/Cell";
import { Status } from "./components/Status";
import { TitleGame } from "./components/TitleGame";
import type { BoardState, Player } from "./types";

function App() {
  const cells: BoardState = [null, "X", null, null, null, null, "O", "O", null];
  const currentPlayer: Player = "X";

  return (
    <div className="game" id="game">
      <TitleGame title="Гра хрести нулики" age={20} />
      <TitleGame title="Гра хрести нулики 1" age={40} />
      <TitleGame title="Гра хрести нулики 2" age={60} />
      <TitleGame title="Гра хрести нулики 3" age={80} />
      <div className="turn">Хід гравця X</div>
      <div className="board">
        {cells.map((cell, index) => (
          <Cell value={cell} key={index} />
        ))}
      </div>
      <button className="reset">Скинути гру</button>
    </div>
  );
}

export default App;
