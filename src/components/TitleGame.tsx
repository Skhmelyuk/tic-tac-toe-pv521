import Typography from "@mui/material/Typography";

interface TitleGameProps {
  title: string;
  age?: number;
}

export function TitleGame({ title, age }: TitleGameProps) {
  return (
    <Typography
      variant="h3"
      sx={{
        mb: 3,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 2,
        textAlign: "center",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(45deg, #2c3e50, #3498db)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        paddingBottom: "10px",
      }}
    >
      {title} {age}
    </Typography>
  );
}

