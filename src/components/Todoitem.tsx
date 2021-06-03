import React from "react";
import { ITodoItem as TodoModel } from "../interfaces/todo";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/actions";

const TodoItem: React.FunctionComponent<{
  TodoList: TodoModel[];
  handleClick?: any;
}> = ({ TodoList, handleClick }) => {
  const dispatch = useDispatch();

  return (
    <div className="blog-list">
      {TodoList &&
        TodoList?.map((todo: TodoModel, index) => (
          <div className="blog-preview" key={todo.id}>
            <h4>{todo.text}</h4>
            <p>{todo.dueDate?.toDateString()}</p>
            <p>created at {todo.completedDate}</p>

            {handleClick ? (
              <span
                role="button"
                style={{
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "8px",
                }}
                onClick={(_) => handleClick(index)}
              >
                undo
              </span>
            ) : (
              <div>
                <button onClick={() => dispatch(deleteTodo(index))}>
                  delete todo
                </button>
                <input
                  type="radio"
                  style={{ float: "right" }}
                  id="f-option"
                  name="selector"
                  onChange={() => dispatch(completeTodo(index))}
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default TodoItem;
