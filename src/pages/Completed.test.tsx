import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Completed from "./Completed";
import { Provider } from "react-redux";
import { store } from "../redux/store";

it("shudn'nt render without providers", () => {
  // const { queryByTitle } = render(<AddTodo />);
  // const btn = queryByTitle("addButton");
  render(
    <Provider store={store}>
      <Completed />
    </Provider>
  );
});
