import React, { FC } from "react";
import { Provider } from "react-redux";
import { setupStore } from "src/store";
import AppRouter from "../AppRouter";
import { BrowserRouter } from "react-router-dom";

const store = setupStore();

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
