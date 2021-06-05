import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItemComponent from "../components/Todoitem";
import { unDeleteTodo } from "../redux/actions";

export interface HomePgaeProps {}

const HomePage: React.FunctionComponent<HomePgaeProps> = () => {
  const todoList = useSelector((state) => {
    console.log(state);
    //@ts-ignore
    const todos = state;
    //@ts-ignore
    return todos.filter((todo) => todo.isDeleted);
  });

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
