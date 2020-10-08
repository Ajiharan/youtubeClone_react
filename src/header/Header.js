import React from "react";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import "./Header.css";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import { Avatar } from "@material-ui/core";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <img
          className="header__logo"
          loading="lazy"
          alt="youtube_logo"
          src="http://pngimg.com/uploads/youtube/youtube_PNG21.png"
        />
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchSharpIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <Avatar alt="avatar" className="header__icon" />
      </div>
    </div>
  );
};

export default Header;
