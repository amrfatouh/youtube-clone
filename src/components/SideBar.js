import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/SideBar.css";
import SideBarItem from "./SideBarItem";

function SideBar() {
  return (
    <div className="sidebar">
      <SideBarItem title="home" Icon={<FontAwesomeIcon icon={faHome} />} />
    </div>
  );
}

export default SideBar;
