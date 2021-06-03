import { render, fireEvent } from "@testing-library/react";
import React from "react";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

fit("checkAppComponentRender", () => {
  // const { queryByTitle } = render(<AddTodo />);
  // const btn = queryByTitle("addButton");
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
