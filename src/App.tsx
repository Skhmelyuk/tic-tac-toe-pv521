import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Cell } from "./components/Cell";
import { Status } from "./components/Status";
import { TitleGame } from "./components/TitleGame";
import useGame from "./hooks/useGame";

const formatTime = (timeInSeconds: number): string => {
  const mins = Math.floor(timeInSeconds / 60);
  const secs = timeInSeconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

function App() {
  const {
    cells,
    currentPlayer,
    winner,
    winnerCombination,
    isDraw,
    handleCellClick,
    handleReset,
    seconds,
  } = useGame();

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center mt-5" id="game">
      <TitleGame title="Гра хрести нулики" age={20} />
      <Status player={currentPlayer} winner={winner} isDraw={isDraw} />
      <div className="mb-3 text-secondary fw-semibold" style={{ fontSize: "1.2rem" }}>
        Час гри: {formatTime(seconds)}
      </div>
      <div className="d-flex flex-column gap-2 mb-4">
        <Row className="gx-2">
          {[0, 1, 2].map((index) => (
            <Col key={index} className="col-auto">
              <Cell
                value={cells[index]}
                onCellClick={() => handleCellClick(index)}
                isWinner={winnerCombination.includes(index)}
              />
            </Col>
          ))}
        </Row>
        <Row className="gx-2">
          {[3, 4, 5].map((index) => (
            <Col key={index} className="col-auto">
              <Cell
                value={cells[index]}
                onCellClick={() => handleCellClick(index)}
                isWinner={winnerCombination.includes(index)}
              />
            </Col>
          ))}
        </Row>
        <Row className="gx-2">
          {[6, 7, 8].map((index) => (
            <Col key={index} className="col-auto">
              <Cell
                value={cells[index]}
                onCellClick={() => handleCellClick(index)}
                isWinner={winnerCombination.includes(index)}
              />
            </Col>
          ))}
        </Row>
      </div>
      <Button variant="primary" size="lg" onClick={handleReset} className="px-4 py-2 fw-bold">
        Скинути гру
      </Button>
    </Container>
  );
}

export default App;

