import { createStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";
import { saveState } from "../shared/localStorage";
import { AddTodoReducer } from "./reducers";

export const store = createStore(AddTodoReducer);

console.log(store);

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState(),
    });
    console.log(store.getState());
  }, 1000)
);
