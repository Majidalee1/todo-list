import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./indexReducers";

export const store = createStore(rootReducer);
