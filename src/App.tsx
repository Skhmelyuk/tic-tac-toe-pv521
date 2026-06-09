import { TitleGame } from "./components/TitleGame";

function App() {
  const cells = [null, "X", null, null, null, null, "O", "O", null];

  return (
    <div className="game" id="game">
      <TitleGame title="Гра хрести нулики" />
      <div className="turn">Хід гравця X</div>
      <div className="board">
        {cells.map((cell, index) => (
          <div key={index} className="cell">
            {cell}
          </div>
        ))}
      </div>
      <button className="reset">Скинути гру</button>
    </div>
  );
}

export default App;
