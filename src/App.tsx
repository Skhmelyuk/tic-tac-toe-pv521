import { Cell } from "./components/Cell";
import { TitleGame } from "./components/TitleGame";
import type { BoardState } from "./types";

function App() {
  const cells: BoardState = [null, "X", null, null, null, null, "O", "O", null];

  return (
    <div className="game" id="game">
      <TitleGame title="Гра хрести нулики" />
      <div className="turn">Хід гравця X</div>
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
