import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' instead of 'react-dom'
import { Provider } from "react-redux";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import store from "./store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme();
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

// Use createRoot to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* Wrap the entire application with BrowserRouter */}
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </>
);
