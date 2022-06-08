import React from "react";


export default function MiniNav ({ currentPage, handlePageChange }){

    return (
        <div>
           <a
        href="/premade"
        onClick={() => handlePageChange("TaskList")}
        className={[currentPage === "TaskList" ? "active" : "", "link"].join(" ")}
      >
     Pre-made
      </a>
      <a
        href="/custom"
        onClick={() => handlePageChange("CustomTask")}
        className={[currentPage, "link"].join(" ")}
      >
        Custom
      </a>
        </div>
    )
}