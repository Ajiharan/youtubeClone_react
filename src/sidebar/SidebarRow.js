import React from "react";
import "./SidebarRow.css";
const SidebarRow = ({ title, Icon }) => {
  return (
    <div className="sidebarRow">
      <Icon className="sidebarRow__icon" />
      <h4 className="sidebarRow__title">{title}</h4>
    </div>
  );
};

export default SidebarRow;
