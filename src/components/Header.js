import { Avatar, IconButton, Menu } from "@material-ui/core";
import React from "react";
import "./Header.css";
import logo from "../assets/gmail.png";
import { Apps, ArrowBack, ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="" />
      </div>
      <div className="header__middle">
        <Search />
        <input type="text" placeholder="Search for box" />
        <ArrowDropDown className="arrow" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
