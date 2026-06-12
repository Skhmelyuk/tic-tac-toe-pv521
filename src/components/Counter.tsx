import { useState } from "react";
import { TitleCounter } from "./TitleCouner";
import { Text } from "./Text";

export const Counter = () => {
  console.log("Render Counter");

  let [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);

    console.log(count);
  };

  return (
    <div style={{ border: "1px solid red", padding: "20px" }}>
      <TitleCounter count={count} />
      <Text />
      <button
        style={{
          padding: "16px",
          borderRadius: "10px",
          backgroundColor: "blue",
        }}
        onClick={incrementCount}
      >
        Add Count
      </button>
    </div>
  );
};
