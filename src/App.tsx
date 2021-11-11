import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./interfaces";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]); //array of ITasks
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.name === "task"
      ? setTask(event.target.value)
      : setDeadline(parseInt(event.target.value));
  };
  const addTask = (): void => {
    setTodoList([...todoList], task);
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
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoListList"></div>
    </div>
  );
};

export default App;
