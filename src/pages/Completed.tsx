import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItemComponent from "../components/Todoitem";
import { unCompletedTodo } from "../redux/actions";

export interface HomePgaeProps {}

export function getTodos() {
  return useSelector((state) => {
    console.log(state);
    //@ts-ignore

    const todos = state?.AddTodoReducer;
    //@ts-ignore

    return todos.filter((todo) => todo.isCompleted);
  });
}

const HomePage: React.FunctionComponent<HomePgaeProps> = () => {
  const todoList = getTodos();
  const dispatch = useDispatch();

  function handleClick(index: any) {
    dispatch(unCompletedTodo(index));
  }
  return (
    <div>
      {/* <TodoItemComponent TodoList={todoList}  />; */}
      <TodoItemComponent TodoList={todoList} handleClick={handleClick} />;
    </div>
  );
};

export default HomePage;
