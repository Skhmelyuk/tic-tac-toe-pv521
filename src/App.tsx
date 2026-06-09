function App() {
  return (
    <div className="game" id="game">
      <h1 className="title">Гра христики-нулики</h1>
      <div className="turn">Хід гравця X</div>
      <div className="board">
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </div>
      <button className="reset">Скинути гру</button>
    </div>
  );
}

export default App;
