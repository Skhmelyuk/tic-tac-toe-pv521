import { useState } from "react";
import { TitleCounter } from "./TitleCouner";
import { Text } from "./Text";

export const Counter = () => {
  console.log("Render Counter");

  const [count, setCount] = useState({
    name: "Serhii",
    email: "skhmelyuk@gmail.com",
    count: 0,
  });

  return (
    <div style={{ border: "1px solid red", padding: "20px" }}>
      <TitleCounter count={count.count} />
      <Text />
      <button
        style={{
          padding: "16px",
          borderRadius: "10px",
          backgroundColor: "blue",
        }}
        onClick={() => {
          setCount({ ...count, count: count.count + 1 });
        }}
      >
        Add Count
      </button>
    </div>
  );
};
