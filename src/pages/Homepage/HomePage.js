import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer.js";
import "./HomePage.css";
import TaskList from "../../components/Tasks/TaskList";
import CustomTask from "../../components/Tasks/CustomTask";
import MiniNav from "../../components/MiniNav/MiniNav";
import MiniHeader from "../../components/Header/MiniHeader";

export default function ADHD() {
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Nav />
      <Header />
      <MiniHeader />
      <MiniNav currentPage={currentPage} handlePageChange={handlePageChange}/>
      <TaskList />
      <CustomTask currentPage={currentPage} handlePageChange={handlePageChange}/>
      <Footer />
    </>
  );
}
