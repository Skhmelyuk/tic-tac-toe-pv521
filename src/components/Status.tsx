import { Box, Text } from "@chakra-ui/react";
import type { CellValue, Player } from "../types";

interface StatusProps {
  player: Player;
  winner: CellValue;
  isDraw: boolean;
}

export function Status({ player, winner, isDraw }: StatusProps) {
  const getMarkColor = (mark: CellValue) => {
    return mark === "X" ? "red.500" : "blue.500";
  };

  return (
    <Box
      mb="20px"
      fontSize="1.4rem"
      color="#34495e"
      py="10px"
      px="20px"
      bg="white"
      borderRadius="full"
      boxShadow="0 2px 15px rgba(0, 0, 0, 0.1)"
      display="inline-block"
      fontWeight="500"
      transition="transform 0.3s ease"
      _hover={{
        transform: "translateY(-2px)",
      }}
    >
      {winner ? (
        <Text as="span">
          Гравець{" "}
          <Box as="span" color={getMarkColor(winner)} fontWeight="bold">
            {winner}
          </Box>{" "}
          переміг!
        </Text>
      ) : isDraw ? (
        "Нічия!"
      ) : (
        <Text as="span">
          Хід гравця{" "}
          <Box as="span" color={getMarkColor(player)} fontWeight="bold">
            {player}
          </Box>
        </Text>
      )}
    </Box>
  );
}

