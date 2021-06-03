import { combineReducers } from "@reduxjs/toolkit";
import { AddTodoReducer } from "./reducers";

export const rootReducer = combineReducers({
  AddTodoReducer,
});
