import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <a> <button onClick={() => navigate("/")}> Front Page </button> </a> 

      <a> <button onClick={() => navigate("/home")}> Home Page </button> </a>

      <a> <button onClick={() => navigate("/about")}> About Me </button> </a>
    </nav>
  );
}

