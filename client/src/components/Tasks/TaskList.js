import React, { useState, useEffect } from "react";

// Array for tasks:
const tasks = [
  { task: "Do the dishes", value: "doDishes" },
  { task: "Put dishes away", value: "dishesAway" },
  { task: "Clean the kitchen", value: "cleanKitchen" },
  { task: "Sweep or vacuum the floors", value: "floors" },
  { task: "Mop the floors", value: "mop" },
  { task: "Clean the bathroom", value: "bathroom" },
  { task: "Scrub the toilet", value: "toilet" },
  { task: "Do the laundry", value: "laundry" },
  { task: "Put clean clothes away", value: "cleanClothes" },
  { task: "Change bed sheets", value: "sheets" },
  { task: "Clean out the car", value: "car" },
  { task: "Water the plants", value: "plants" },
  { task: "Clean out the closet", value: "closet" },
  { task: "Do the dusting", value: "dust" },
  { task: "Take out the garbage and/or recycling", value: "garbage" },
  { task: "Clean out the gutters", value: "gutters" },
  { task: "Respond to your emails", value: "emails" },
  { task: "Respond to your text messages", value: "texts" },
  { task: "Call for a refill of your medications", value: "meds" },
  { task: "Brush your teeth", value: "teeth" },
  { task: "Brush or comb your hair", value: "hair" },
];

export default function TaskList() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  // TODO: useEffect: have it be blank/show

  function handelClick() {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)].task;

    setTask(randomTask);
    const min = 15;
    const max = 180;
    const time = Math.floor(Math.random() * max - min + 1) + min;

    setTime(time);
  }
  return (
    <>
      <button className="home-btn" onClick={handelClick}>
        Surprise Me!{" "}
      </button>

      <li>
        {task} for {time} minutes or (until complete).
      </li>
    </>
  );
}
