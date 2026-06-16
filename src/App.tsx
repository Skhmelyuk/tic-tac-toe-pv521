import { Flex, Box, Button } from "@chakra-ui/react";
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
    <Flex direction="column" align="center" justify="center" id="game" py={8}>
      <TitleGame title="Гра хрести нулики" age={20} />
      <Status player={currentPlayer} winner={winner} isDraw={isDraw} />
      <Box mb="15px" fontSize="1.2rem" color="#2c3e50" fontWeight="500">
        Час гри: {formatTime(seconds)}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap="10px"
        w="300px"
        mx="auto"
      >
        {cells.map((cell, index) => (
          <Cell
            value={cell}
            key={index}
            onCellClick={() => handleCellClick(index)}
            isWinner={winnerCombination.includes(index)}
          />
        ))}
      </Box>
      <Button
        mt="20px"
        px="20px"
        py="10px"
        h="auto"
        bg="#007bff"
        color="white"
        borderRadius="md"
        cursor="pointer"
        transition="background-color 0.3s ease"
        onClick={handleReset}
        _hover={{
          bg: "#0056b3",
        }}
        _active={{
          transform: "scale(0.98)",
        }}
      >
        Скинути гру
      </Button>
    </Flex>
  );
}

export default App;

