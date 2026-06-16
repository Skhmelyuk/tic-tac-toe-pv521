interface TitleGameProps {
  title: string;
  age?: number;
}

export function TitleGame({ title, age }: TitleGameProps) {
  const titleStyles: React.CSSProperties = {
    color: "#2c3e50",
    marginBottom: "20px",
    fontSize: "2.5rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(45deg, #2c3e50, #3498db)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    paddingBottom: "10px",
  };

  return (
    <h1 style={titleStyles}>
      {title} {age}
    </h1>
  );
}

