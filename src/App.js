import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewtodo] = useState("");

  const changetodo = (e) => {
    setNewtodo(e.target.value);
  };
  const savetodo = async () => {
    const updatedState = todos;
    updatedState.push(newtodo);
    await setTodos(updatedState);
    setNewtodo("");
  };

  return (
    <>
      <div className="App">
        <h1>Todo App</h1>
      </div>
      <div className="addTodo">
        <input
          type="text"
          placeholder="Enter Task name"
          onChange={changetodo}
          value={newtodo}
        />
        <button onClick={savetodo}>Add Todo</button>
      </div>
      <div className="todos">
        {todos.map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
    </>
  );
}
