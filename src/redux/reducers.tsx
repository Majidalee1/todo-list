import { Action } from "@reduxjs/toolkit";
import { Actions, ITodoItem } from "../interfaces/todo";
import { completeTodo } from "./actions";
import { todos } from "./store";
import { loadState } from "../shared/localStorage";

export const AddTodoReducer = (currentState: any, action: any) => {
  currentState = loadState()?.todos ?? [];

  switch (action.type) {
    case Actions.ADD_TODO:
      const payload = action?.payload;
      console.log(payload);

      return [
        ...currentState,
        {
          ...payload,
        },
      ];
    case Actions.ADD_TO_COMPLETED:
      console.log(currentState);

      return [
        ...currentState.slice(0, action.index),
        Object.assign({}, currentState[action.index], {
          isCompleted: true,
          isPending: false,
          isDeleted: false,
        }),
        ...currentState.slice(action.index + 1),
      ];

    case Actions.ADD_BACK_TO_PENDING:
      return [
        ...currentState.slice(0, action.index),
        Object.assign({}, currentState[action.index], {
          isCompleted: false,
          isPending: true,
          isDeleted: false,
        }),
        ...currentState.slice(action.index + 1),
      ];

    case Actions.ADD_TO_TRASH:
      return [
        ...currentState.slice(0, action.index),
        Object.assign({}, currentState[action.index], {
          isDeleted: true,
          isPending: false,
        }),
        ...currentState.slice(action.index + 1),
      ];

    case Actions.UNDO_DELETE:
      return [
        ...currentState.slice(0, action.index),
        Object.assign({}, currentState[action.index], {
          isCompleted: false,
          isPending: true,
          isDeleted: false,
        }),
        ...currentState.slice(action.index + 1),
      ];

    default:
      return currentState;
  }
};
