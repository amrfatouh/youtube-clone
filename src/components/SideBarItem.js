import React from "react";
import "../css/SideBarItem.css";

function SideBarItem({ title, Icon, selected }) {
  return (
    <div className={`sidebar-item ${selected && "selected"}`}>
      <div className="icon">{Icon}</div>
      <div className="title">{title}</div>
    </div>
  );
}

export default SideBarItem;
