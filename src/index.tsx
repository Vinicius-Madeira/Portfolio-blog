import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { deepOrange, green } from "@material-ui/core/colors";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "#eee",
      },
    },
  },
  palette: {
    primary: green,
    secondary: deepOrange,
    background: {
      default: "#f9f9f9",
    },
  },
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
