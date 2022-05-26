import React, { useState } from "react";
import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer.js";
import "./HomePage.css";

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



export default function ADHD() {
  const [tasks, setIndex] = useState(0);

  function changeTask() {
    let newIndex = Math.floor(Math.random() * (tasks.length - 0) + 0);
    setIndex(newIndex);
  }

  function addCustomTask() {

  }

  function displayCustomTask() {

  }

  return (
    <>
    <Nav/>
    <Header/>
      <div>
        <div>
          <h2> What tasks can we accomplish today?</h2>

          <h3> Be assigned a task from a pre-made list : </h3>

          <button onClick={changeTask}>Surprise Me! </button>
          <li>{}</li>

{/* <button>Try again?</button> */}


          <h1> OR</h1>

          <h3> Enter in your own tasks and then be assigned one at random: </h3>
          <input />
          <button onClick={addCustomTask}>Add custom task </button>
        <p> All done? </p>
          <button onClick={displayCustomTask}> Randomize Me! </button>
          <li></li>
        </div>
      </div>
      <Footer />
    </>
  );
}
