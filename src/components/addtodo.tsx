import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const Todos: React.FunctionComponent = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    setTodo(e.target.value);
  };

  //   return (
  //     <div className="addTodos">
  //       <input
  //         type="text"
  //         onChange={(e) => handleChange(e)}
  //         className="todo-input"
  //         value={todo}
  //       />

  //       <button
  //         className="add-btn"
  //         onClick={() => (dispatch(addTodo(todo)), setTodo(""))}
  //       >
  //         Add
  //       </button>
  //       <br />
  //     </div>
  //   );
  // };

  return (
    <div className="create">
      <h2>Add a Todo</h2>

      <label>Add Item:</label>
      <input
        type="text"
        required
        value={todo}
        onChange={(e) => handleSubmit(e)}
      />
      <button
        className="create button"
        onClick={() => (dispatch(addTodo(todo)), setTodo(""))}
      >
        Add Item
      </button>
    </div>
  );
};

export default Todos;
