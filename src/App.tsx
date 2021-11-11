import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.name === "task"
      ? setTask(event.target.value)
      : setDeadline(parseInt(event.target.value));
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline..."
            name="deadline"
            onChange={handleChange}
          />
        </div>
        <button>Add task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
