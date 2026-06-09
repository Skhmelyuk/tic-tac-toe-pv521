function App() {
  return (
    <div class="game" id="game">
      <h1 class="title">Гра христики-нулики</h1>
      <div class="turn">Хід гравця X</div>
      <div class="board">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <button class="reset">Скинути гру</button>
    </div>
  );
}

export default App;
