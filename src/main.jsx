import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SingUp } from "./pages/SingUp";
import { SingIn } from "./pages/SingIn";

import { Home } from "./pages/Home";

import { ThemeProvider } from "styled-components";
import Colors from "./Styles/theme";

import GlobalStyle from "./Styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Colors}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SingUp />} />
          <Route path="/login" element={<SingIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
