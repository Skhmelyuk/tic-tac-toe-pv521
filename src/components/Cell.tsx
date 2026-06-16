import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import type { CellValue } from "../types";

interface CellProps {
  value: CellValue;
  onCellClick: () => void;
  isWinner: boolean;
}

const winPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(46, 204, 113, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
  }
`;

export function Cell({ value, onCellClick, isWinner }: CellProps) {
  const textColor = value === "X" ? "red.500" : value === "O" ? "blue.500" : "inherit";
  const textShadowValue = value === "X" 
    ? "2px 2px 4px rgba(231, 76, 60, 0.2)" 
    : value === "O" 
      ? "2px 2px 4px rgba(52, 152, 219, 0.2)" 
      : "none";

  return (
    <Box
      onClick={onCellClick}
      w="100px"
      h="100px"
      bg={isWinner ? "linear-gradient(45deg, #2ecc71, #27ae60)" : "white"}
      color={isWinner ? "white" : textColor}
      border={isWinner ? "2px solid" : "none"}
      borderColor={isWinner ? "green.600" : "transparent"}
      borderRadius="lg"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="2.5rem"
      fontWeight="bold"
      cursor="pointer"
      userSelect="none"
      textShadow={isWinner ? "1px 1px 2px rgba(0, 0, 0, 0.2)" : textShadowValue}
      transition="background-color 0.3s ease, transform 0.2s ease"
      animation={isWinner ? `${winPulse} 1.5s ease-in-out infinite` : "none"}
      _hover={{
        bg: isWinner ? "linear-gradient(45deg, #27ae60, #2ecc71)" : "gray.50",
        transform: "scale(1.05)",
      }}
    >
      {value}
    </Box>
  );
}

