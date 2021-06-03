import React from "react";

import { TodoItem } from "./../interfaces/todo";

import TodoItemComponent from "../components/Todoitem";
import { useState } from "react";
import AddTodos from "../components/addtodo";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export interface HomePgaeProps {}

const TodoList: TodoItem[] = [
  {
    id: 1,
    text: "Complete The Core Functionality",
  },
  {
    id: 2,
    text: "Complete creation and deletion",
  },
  {
    id: 3,
    text: "Complete The add edit",
  },
];

export function getTodos() {
  return useSelector((state) => {
    //@ts-ignore
    const todos = state?.AddTodoReducer;

    //@ts-ignore
    return todos.filter((todo) => todo.isPending);
    // return todos;
  });
}

const HomePage: React.FunctionComponent<HomePgaeProps> = () => {
  const { route } = useParams<any>();
  console.log(route);

  const [completedItems, setcompletedItems] = useState([]);
  // const todoList = useSelector((state) => state?.TodoReducer.data);

  const todoList = getTodos();

  const handleClick = (todo: any) => {
    setcompletedItems(completedItems.concat(todo));
    console.log(completedItems);
    console.log(todoList);
  };
  return (
    <div>
      <AddTodos />
      <TodoItemComponent TodoList={todoList} />;
      {/* <TodoItemComponent TodoList={completedItems} handleClick={handleClick} />; */}
    </div>
  );
};

export default HomePage;
