import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createContext } from "react";

interface RegisterUser {
  user: string;
  email: string;
}

export const RegisterContext = createContext<RegisterUser | undefined>(
  undefined,
);

export const RegisterContext2 = createContext<RegisterUser | undefined>(
  undefined,
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RegisterContext.Provider
      value={{ user: "Hmelyuk", email: "skhmelyuk1985@gmail.com" }}
    >
      <App />
    </RegisterContext.Provider>
  </StrictMode>,
);
