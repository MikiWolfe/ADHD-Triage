import React from "react";
import { useNavigate } from "react-router-dom";
import "./FrontPage.css";

export default function FrontPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the ADHD Triage Board</h1>
      <p>
        Do you suffer from executive dysfunction also known as task overload and
        don't know which task to tackle first? We have an application for you!
        We have a way for you to be assigned a task and given a time to finish
        it to help users not get lost in time blindness or get distracted in
        TikTok time loops or doom scrolling on Twitter. Enter in what activities
        that you need to do accomplish in a day and you will be assigned a task
        at random. We will also link it to sound to help you stay on track.
      </p>
      <button onClick={() => navigate("/home")}> Press enter to start! </button>
    </div>
  );
}
