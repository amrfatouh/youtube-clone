import React from "react";
import "../css/SideBarItem.css";

function SideBarItem({ title, Icon }) {
  return (
    <div className="sidebar-item">
      {Icon}
      {title}
    </div>
  );
}

export default SideBarItem;
