import React from "react";
import NavBar from "../../Components/Organisms/NavBar";
import "./Screen-Layout.css";

const ScreenLayout = () => {
  return (
    <div className="screen-layout">
      <NavBar />
      <div className="">content</div>
      <footer>footer</footer>
    </div>
  );
};

export default ScreenLayout;
