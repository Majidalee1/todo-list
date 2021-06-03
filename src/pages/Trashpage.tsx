import React from "react";

import TodoItemComponent from "../components/Todoitem";
import { useState } from "react";
import AddTodos from "../components/addtodo";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { unDeleteTodo } from "../redux/actions";

export interface HomePgaeProps {}

export function getTodos() {
  return useSelector((state) => {
    console.log(state);
    //@ts-ignore
    const todos = state?.AddTodoReducer;
    //@ts-ignore
    return todos.filter((todo) => todo.isDeleted);
  });
}

const HomePage: React.FunctionComponent<HomePgaeProps> = () => {
  const todoList = getTodos();
  const dispatch = useDispatch();

  function handleClick(index: any) {
    dispatch(unDeleteTodo(index));
  }
  return (
    <div>
      <TodoItemComponent TodoList={todoList} handleClick={handleClick} />;
    </div>
  );
};

export default HomePage;
