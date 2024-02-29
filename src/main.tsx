import './index.css'
import App from "./App";
import "reflect-metadata";
import { Suspense } from 'react'
import theme from "./app-config/theme";
import ReactDOM from "react-dom/client";
import Layout from "./app-config/layout/layout";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback="loading">
    <ThemeProvider theme={theme}>
      <App layout={<Layout />} />
    </ThemeProvider>
  </Suspense>
);
