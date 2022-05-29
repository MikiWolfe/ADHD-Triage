import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer.js";
import "./HomePage.css";
import TaskList from "../../components/Tasks/TaskList";
import AddTask from "../../components/Tasks/TaskForm";
import CustomTask from "../../components/Tasks/CustomTask";

export default function ADHD() {
  const [show, setShow] = useState(false);

  function clearLocalStorage() {
    window.localStorage.clear();
    window.location.reload(false);
  }

  return (
    <>
      <Nav />
      <Header />
      <div>
        <div>
          <h2> What household tasks can we accomplish today?</h2>

          <h3> Be assigned a task from a pre-made list: </h3>

          <ul visibility="false">
            <TaskList onClick={() => TaskList()} />
          </ul>

          <p>Try again for another task!</p>

          <h1> OR</h1>
          <AddTask />

          <p> All done? </p>

          <ul>
            <CustomTask onClick={() => CustomTask()} />
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
        </div>
      </div>
      <Footer />
    </>
  );
}
