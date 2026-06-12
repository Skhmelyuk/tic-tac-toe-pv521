export const TitleCounter = ({ count }: { count: number }) => {
  console.log("Render TitleCounter");
  return <p style={{ fontSize: "24px", color: "green" }}>Counter: {count}</p>;
};
