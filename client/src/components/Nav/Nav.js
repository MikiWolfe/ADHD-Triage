import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
    <a className="nav-link" onClick={() => navigate("/")}>   Front Page </a>

      <a className="nav-link" onClick={() => navigate("/home")}> Home </a>

      <a className="nav-link" onClick={() => navigate("/about")}> About Me  </a>
    </nav>
  );
}

