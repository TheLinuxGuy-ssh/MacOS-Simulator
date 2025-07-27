import "./index.css";
import "@radix-ui/themes/styles.css";
import { TerminalContextProvider } from "react-terminal";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TerminalContextProvider>
      <Theme scaling="100%">
        <App />
      </Theme>
    </TerminalContextProvider>
  </StrictMode>
);
