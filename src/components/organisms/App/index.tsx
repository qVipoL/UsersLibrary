import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "src/store";
import AppRouter from "../AppRouter";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
