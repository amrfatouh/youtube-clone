import React, { useState } from "react";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faSearch, faTh, faVideo } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

function Header() {
	const [input, setInput] = useState("");

	return (
		<div className="header">
			<div className="left">
				<FontAwesomeIcon icon={faBars} />
				<Link to="/">
					<img src={logo} alt="logo" className="logo" />
				</Link>
			</div>
			<div className="center">
				<input type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)} />
				<Link to={`/search/${input}`}>
					<FontAwesomeIcon icon={faSearch} className="search-icon" />
				</Link>
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
