import React from "react";
import { Actions as Action } from "../interfaces/todo";
import { ITodoItem } from "./../interfaces/todo";

export const addTodo = (todoItem: any) => {
  console.log(todoItem);

  return {
    type: Action.ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      text: todoItem,
      isPending: true,
    },
  };
};

export const deleteTodo = (index: any) => {
  console.log(index);

  return {
    type: Action.ADD_TO_TRASH,
    index,
  };
};

export const completeTodo = (index: any) => {
  return {
    type: Action.ADD_TO_COMPLETED,
    index,
  };
};

export const unCompletedTodo = (index: any) => {
  console.log(index);

  return {
    type: Action.ADD_BACK_TO_PENDING,
    index,
  };
};

export const unDeleteTodo = (index: any) => {
  console.log(index);

  return {
    type: Action.UNDO_DELETE,
    index,
  };
};
