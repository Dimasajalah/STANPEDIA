import React from "react";

import "./question2.css";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import HomeMainbar from "./HomeMainbar";

const Questions = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Questions;