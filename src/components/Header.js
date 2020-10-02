import React from "react";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faSearch,
  faTh,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <FontAwesomeIcon icon={faBars} />
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="center">
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="right">
        <FontAwesomeIcon icon={faVideo} className="right-item" />
        <FontAwesomeIcon icon={faTh} className="right-item" />
        <FontAwesomeIcon icon={faBell} className="right-item" />
        <img src={avatar} alt="avatar" className="avatar right-item" />
      </div>
    </div>
  );
}

export default Header;
