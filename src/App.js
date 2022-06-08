import React from "react";
import { Routes, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage/FrontPage";
import HomePage from './pages/Homepage/HomePage'
import About from './pages/About/About'
// import CustomTask from "./components/Tasks/CustomTask";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path ='/home'element ={<HomePage/>} />
        <Route path = '/about' element={<About/>} />
        {/* <Route path = '/custom' element={<CustomTask/>}/> */}
        {/* <Route
          path="*"
          element={
            <div>
              <h1> 404 </h1> <h2>Page not found</h2>{" "}
            </div>
          }
        
        /> */}
      </Routes>
    </>
  );
}
