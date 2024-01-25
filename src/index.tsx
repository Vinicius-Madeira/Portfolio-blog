import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Layout from "./components/Layout";
import { deepOrange, green } from "@material-ui/core/colors";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    primary: green,
    secondary: deepOrange,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
