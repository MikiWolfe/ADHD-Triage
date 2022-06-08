import React, { useState } from "react";
import AddTask from "./TaskForm";
import "./List.css";
export default function CustomTask() {
  const tasks = JSON.parse(localStorage.getItem("task") || "[]");
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [show, setState] = useState(false);
  // TODO: useEffect: have it be blank/show

  function handelClick() {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    setTask(randomTask);

    const min = 15;
    const max = 180;
    const time = Math.floor(Math.random() * max - min + 1) + min;
    setTime(time);
    setState(true);
  }
  function clearLocalStorage() {
    window.localStorage.clear();
    window.location.reload(false);
  }

  return (
    <>
      <div></div>

      <AddTask />

      <p> All done? </p>

      <button className="home-btn" onClick={handelClick}>
        Randomize Me!{" "}
      </button>
      <ul>
        <li className="list" aria-hidden={show}>
          {task} for {time} minutes or (until complete).
        </li>
      </ul>

      <div className="caution">
        <h4 className="caution"> What to try again? </h4>
        <p className="caution">Click this button </p>
        <button className="caution-btn" onClick={clearLocalStorage}>
          {" "}
          Erase all my data{" "}
        </button>
        <p className="caution">to get a clean slate to start again!</p>
      </div>
    </>
  );
}
