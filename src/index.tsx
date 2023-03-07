import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { customThemeMUI } from "./customThemeMUI";
import Router from "./Routes/Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={customThemeMUI}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
