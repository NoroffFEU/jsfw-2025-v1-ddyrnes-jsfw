import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import { CartProvider } from "./context/CartContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <GlobalStyles />
          <Toaster
            position="top-right"
            containerStyle={{
              top: "90px",
            }}
            toastOptions={{
              duration: 2000,
              style: {
                marginTop: "10px",
              },
            }}
          />
          <App />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
