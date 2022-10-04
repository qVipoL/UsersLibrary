import React, { FC } from "react";
import { Provider } from "react-redux";
import HomePage from "src/pages/HomePage";
import store from "src/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
