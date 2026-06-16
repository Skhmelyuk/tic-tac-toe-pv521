import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { CellValue, Player } from "../types";

interface StatusProps {
  player: Player;
  winner: CellValue;
  isDraw: boolean;
}

export function Status({ player, winner, isDraw }: StatusProps) {
  const getMarkColor = (mark: CellValue) => {
    return mark === "X" ? "#e74c3c" : "#3498db";
  };

  return (
    <Box
      sx={{
        marginBottom: "20px",
        padding: "10px 20px",
        backgroundColor: "#fff",
        borderRadius: "30px",
        boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
        display: "inline-block",
        transition: "transform 0.3s ease",
        cursor: "default",

        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
      {winner ? (
        <Typography variant="body1" sx={{ fontSize: "1.4rem", color: "#34495e", fontWeight: 500 }}>
          Гравець{" "}
          <Box component="span" sx={{ color: getMarkColor(winner), fontWeight: 700 }}>
            {winner}
          </Box>{" "}
          переміг!
        </Typography>
      ) : isDraw ? (
        <Typography variant="body1" sx={{ fontSize: "1.4rem", color: "#34495e", fontWeight: 500 }}>
          Нічия!
        </Typography>
      ) : (
        <Typography variant="body1" sx={{ fontSize: "1.4rem", color: "#34495e", fontWeight: 500 }}>
          Хід гравця{" "}
          <Box component="span" sx={{ color: getMarkColor(player), fontWeight: 700 }}>
            {player}
          </Box>
        </Typography>
      )}
    </Box>
  );
}

