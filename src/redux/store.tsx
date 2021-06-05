import { createStore } from "@reduxjs/toolkit";
import { saveState, loadState } from "../shared/localStorage";
import { throttle } from "lodash";
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
