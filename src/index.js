import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/theme/default";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />    
    </ThemeProvider>
  </React.StrictMode>
);
