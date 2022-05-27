import React, {useState} from "react";



  function TaskList () {
      const [task, setTask] = useState('')

    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    console.log(randomTask.task);


    const returnedRandomTask = randomTask.task;
   return returnedRandomTask.map((task, i) => (
       <li key={i}>{task}</li>
   ))
   
  }