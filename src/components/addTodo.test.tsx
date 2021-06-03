import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import AddTodo from "./addtodo";
import { Provider } from "react-redux";
import { store } from "../redux/store";

it("checkButtonRender", () => {
  // const { queryByTitle } = render(<AddTodo />);
  // const btn = queryByTitle("addButton");
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
});

it("clickAddButton", () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const button = screen.getByTitle("addButton");
  fireEvent.click(button);
});

test("It should handle any value", () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const input = screen.getByTitle("addTodoInput");
  fireEvent.change(input, { target: { value: "$23.0" } });
  expect(input.value).toBe("$23.0");
});
