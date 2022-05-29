import React, { useState } from "react";


export default function AddTask() {
  let data = localStorage.getItem("task");
  let taskData = data ? JSON.parse(data) : [];

  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTask(e.target.value);

    console.log(task);
    taskData.push(task);
    localStorage.setItem("task", JSON.stringify(taskData));
  };

  return (
    <form>
      <h3>Enter in your own tasks and then be assigned one at random:</h3>
      <input
        name="task"
        type="text"
        placeholder="Add your own task:"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="add-btn" onClick={handleSubmit}>
        Add custom task{" "}
      </button>
    </form>
  );
}
