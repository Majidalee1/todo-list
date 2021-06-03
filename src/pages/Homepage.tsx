import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTodos from "../components/addtodo";
import TodoItemComponent from "../components/Todoitem";

export interface HomePgaeProps {}

const HomePage: React.FunctionComponent<HomePgaeProps> = () => {
  const todoList = useSelector((state) => {
    //@ts-ignore
    const todos = state;

    //@ts-ignore
    return todos.filter((todo) => todo.isPending);
    // return todos;
  });

  // const todoList = useSelector((state) => state?.TodoReducer.data);

  // const todoList = getTodos();

  return (
    <div>
      <AddTodos />
      <TodoItemComponent TodoList={todoList} />;
      {/* <TodoItemComponent TodoList={completedItems} handleClick={handleClick} />; */}
    </div>
  );
};

export default HomePage;
