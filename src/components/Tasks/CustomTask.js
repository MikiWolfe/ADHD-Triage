import React, { useState } from "react";

export default function CustomTask() {
  const tasks = JSON.parse(localStorage.getItem("task") || "[]");
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  // TODO: useEffect: have it be blank/show

  function handelClick() {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    setTask(randomTask);

    const min = 15;
    const max = 180;
    const time = Math.floor(Math.random() * max - min + 1) + min;
    setTime(time);
  }
  return (
    <>
      <button className="home-btn" onClick={handelClick}>
        Randomize Me!{" "}
      </button>
      <li>
        {task} for {time} minutes or (until complete).
      </li>
    </>
  );
}
