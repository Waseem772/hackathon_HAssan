import { useState } from "react";
import "./App.css";
import { Router_app } from "./config/Router_app";
import { Navbar } from "./component/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./config/themeConfig";
import { checkUserAuth } from "./config/firebaseAuthMethod";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {checkUserAuth()}
          <Router_app />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
