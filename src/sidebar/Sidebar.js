import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow title="Home" Icon={HomeSharpIcon} />
      <SidebarRow title="Trending" Icon={WhatshotSharpIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsSharpIcon} />
    </div>
  );
};

export default Sidebar;
